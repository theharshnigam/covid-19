import React, { useEffect, useState } from 'react';
import Typical from 'react-typical';


const StateWise = () => {

    const [data, setdata] = useState([])

    const getCovidData = async () => {

        try {
            // const res = await fetch('https://data.covid19india.org/data.json');
            
            const res = await fetch('https://disease.sh/v3/covid-19/gov/India')
            const actualData = await res.json();
            setdata(actualData.states)
            // setdata(actualData.statewise);
            // let dailyData = actualData.cases_time_series[actualData.cases_time_series.length - 1];
            const date = new Date(actualData.updated)
            console.log(actualData)
            // alert(`New covid cases  "${dailyData.dailyconfirmed}" on ${dailyData.date}`);
            alert(`Today cases: ${actualData.total.todayCases} on 
            ${date.toDateString()}`)
        } catch (error) {
            alert(` ${error}, Please try again after sometime. . ❗`) 
        }


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
                        COVID-19 Dashboard of <br /> <b><span>INDIA</span> </b> <br />
                        <p style={{ fontSize: "50%" }}>
                            <Typical
                                loop={Infinity}
                                steps={['😷 Wear Mask 😷', 4000,
                                    '🏡 Stay Home 🏡', 4000,
                                    '🙂 Stay Safe 🙂', 4000,]}
                            />
                        </p>
                    </h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover ">
                        <thead className="table-dark " >
                            <tr>
                                <th >State</th>
                                <th >Confirmed</th>
                                <th >Active</th>
                                <th >Recoverd</th>
                                <th >Deaths</th>
                                <th >Today Confirmed</th>
                                <th >Today Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curElem) => {
                                    return (
                                        <tr>
                                            <td>{curElem.state}</td>
                                            <td>{curElem.cases}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.todayCases}</td>
                                            <td>{curElem.todayDeaths}</td>
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
