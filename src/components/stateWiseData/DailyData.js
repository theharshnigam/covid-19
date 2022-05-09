import React, { useState, useEffect } from 'react';
import Typical from 'react-typical';


const DailyData = () => {

    const [dailyData, setDailyData] = useState([])

    const getDailyData = async() => {
        try {
            const res = await fetch('https://disease.sh/v3/covid-19/gov/India');
            const actualData = await res.json();
            setDailyData(actualData.total);
        } catch (error) {
            alert(` ${error}, Please try again after sometime. . ❗`)
        }
       
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
                            <th >Today Cases</th>
                            <th >Today Deaths</th>
                            <th >Today Recovered</th>
                            <th >Total Active cases</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dailyData.map((curElem) => {
                                return (
                                    <tr>
                                        <td>{curElem.total.updated}</td>
                                        <td>{curElem.total.todayCases}</td>
                                        <td>{curElem.total.todayDeaths}</td>
                                        <td>{curElem.total.todayRecovered}</td>
                                        <td>{curElem.total.active}</td>
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