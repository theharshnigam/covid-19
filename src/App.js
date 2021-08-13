import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StateWise from './components/stateWiseData/StateWise';
import './components/stateWiseData/StateWise.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DailyData from './components/stateWiseData/DailyData';
import Menu from './Menu';


const App = () => {
  return (
    <>
      <Menu />
    
      <Switch>
        <Route exact path= "/covid-19"  component={DailyData} />
        <Route path= "/statewise" component={StateWise} />
      </Switch>
   

    </>
  )
}

export default App;
