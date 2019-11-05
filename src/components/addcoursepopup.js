import React from 'react';
import '../css/Addnewcourse.css';
import GitDetails from './GitDetails';
import Newcourse from './Newcourse';

import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Settings     from './settings';
function Addcoursepopup() {

  return (
   <BrowserRouter>
     <div className="add-course-popup">
        <Switch>
            <Route exact path ='/' component={Newcourse}/>
            <Route  path ='/GitDetails' component={GitDetails}/>
        </Switch>

   </div>
    </BrowserRouter>
  );
}

export default Addcoursepopup;