import React from 'react';
import Courses from './courses';
import Coursecategories from './coursecategories';
import Instructors from './instructors';
import Sessions from './sesions';
import Settings from './settings';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Dynamiccomponents = () => {
    return (
     <div className='dynamic-section'>
        <Switch>
         <Route exact path='/' component={Coursecategories}/>
          <Route path='/courses' component={Courses}/>
          <Route path='/instructors' component={Instructors}/>
          <Route path='/sessions' component={Sessions}/>
          <Route path='/settings/' component={Settings}/>
          </Switch>
        </div>  
     );
}
 
export default Dynamiccomponents;