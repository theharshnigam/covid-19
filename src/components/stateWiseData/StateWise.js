import React, { useEffect, useState } from 'react';

const StateWise = () => {

    const [data, setdata] = useState([])

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        setdata(actualData.statewise);

    }

    const getDailyData = async () => {
        const local = await fetch('https://api.covid19api.com/summary');
        const localData = await local.json();
        const dailydata = localData.Countries[76].NewConfirmed;
        const dailyNewDeath = localData.Countries[76].NewDeaths;
        const updatedDate = localData.Countries[76].Date;
        alert(`New Confirmed Cases : ${dailydata}
                New Deaths : ${dailyNewDeath} 
                Updated On : ${updatedDate}
                Stay Home, Stay Safe!`);
    }
    

    useEffect(() => {
        getCovidData();
        getDailyData();
    }, [])

    return (
        <>
            <div className="container mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center">COVID-19 Dashboard <br/> <span>INDIA</span></h1>
                    
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
