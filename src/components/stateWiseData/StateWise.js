import React, { useEffect, useState } from 'react';
import Typical from 'react-typical';


const StateWise = () => {

    const [data, setdata] = useState([])

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        setdata(actualData.statewise);
        let dailyData = actualData.cases_time_series[actualData.cases_time_series.length-1];
        console.log(actualData)
        alert(`New covid cases  "${dailyData.dailyconfirmed}" on ${dailyData.date}`);
        
    }

    // const getDistrictWiseData = async () => {
    //     const local = await fetch('https://api.covid19india.org/district_wise.json');
    //     const localData = await local.json();
    //     console.log(localData.districts)
    //     alert(`Lakhimpur Kheri : `)
   // }
    

    useEffect(() => {
        getCovidData();
      
    }, [])

    return (
        <>
            <div className="container mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center">
                    COVID-19 Dashboard of <br/> <b><span>INDIA</span> </b> <br/>
                    <p style={{fontSize:"50%"}}>
                    <Typical
                            loop={Infinity}
                            steps = {['😷 Wear Mask 😷',3000,
                                    '🏡 Stay Home 🏡',3000,
                                    '🙂 Stay Safe 🙂',3000,]}
                        />
                    </p> 
                    </h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover ">
                        <thead className= "table-dark " >
                            <tr>
                                <th >State</th>
                                <th >Confirmed</th>
                                <th >Active</th>
                                <th >Recoverd</th>
                                <th >Deaths</th>
                                <th >Last Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curElem) => {
                                    return (
                                        <tr>
                                            <td>{curElem.state}</td>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                        </tr>

                                    )
                                }
                                )
                            }


                        </tbody>
                    </table>
                </div>
                
            </div>
            <h6>-Harsh Nigam</h6>
        </>
    )
}

export default StateWise;
