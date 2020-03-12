import React from 'react';     /* 'react' is a pre-defined file */
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Profile';
import Resume from './Resume'

let App=()=>{
  return(          /* return can only returns single statement. so that we uses "<div></div>"  */
    <BrowserRouter>
    <Route exact path="/" component={Profile}/>
    <Route exact path="/resume" component={Resume}/>
    </BrowserRouter>
  )
}

export default App;
