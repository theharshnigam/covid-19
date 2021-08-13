
import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <NavLink exact activeClassName = "nav-link active active_class" style={{textDecoration:"none"}} to = "/covid-19">  Daily Data  </NavLink>
                                
                            </li>
                            <li class="nav-item">
                            <NavLink exact activeClassName = "nav-link active active_class" style={{textDecoration:"none"}} to = "/"> Statewise Data   </NavLink> 
                               
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>

            {/* <NavLink exact activeClassName = "active_class" to = "/">  Statewise data  </NavLink> <br/>
            <NavLink exact activeClassName = "active_class" to = "/dailydata"> Daily Data   </NavLink> */}
        </>
    )
}
export default Menu;