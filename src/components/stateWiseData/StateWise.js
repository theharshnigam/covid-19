import React, { useEffect, useState } from 'react';

const StateWise = () => {

    const [data, setdata] = useState([])

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise)
        setdata(actualData.statewise)

    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <div className="container mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center">COVID-19 Dashboard <br/> <span>INDIA</span></h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover ">
                        <thead className= "table-dark" >
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
                                data.map((curElem, Index) => {
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
