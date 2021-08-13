import React, { useState, useEffect } from 'react';
import Typical from 'react-typical';


const DailyData = () => {

    const [dailyData, setDailyData] = useState([])

    const getDailyData = async() => {

        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        setDailyData(actualData.cases_time_series);
    }


useEffect(() => {
    getDailyData();
  
}, [])

return (
    <>
        <div className="container mt-5">
            <div className="main-heading">
                <h1 className="mb-5 text-center">
                <b>Daily</b> cases of Covid-19 (India)
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
                            <th >Last Update</th>
                            <th >Daily Confirmed</th>
                            <th >Daily Deaths</th>
                            <th >Daily Recoverd</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dailyData.reverse().map((curElem) => {
                                return (
                                    <tr>
                                         <td>{curElem.date}</td>
                                        <td>{curElem.dailyconfirmed}</td>
                                        <td>{curElem.dailydeceased}</td>
                                        <td>{curElem.dailyrecovered}</td>
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

 export default DailyData;