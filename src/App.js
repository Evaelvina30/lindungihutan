import React from 'react';
import './App.css';
import Home from './container/Home/home';
import Kampanye from './container/Kampanye/kampanye';
import Profile from './container/Profile/profile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
     <Switch>
       <Route path="/" exact>
          <Home />
       </Route>
       <Route path="/kampanye">
          <Kampanye />
       </Route>
       <Route path="/profile">
          <Profile />
       </Route>
     </Switch>
   </Router>    
  );
}

export default App;
