import React from 'react';
import InstructorMail from './IntructorMail';
import ParticipantMail from './ParticipantMail';
import "../css/dashboard.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const Settings = () => {
    return (  

     <div className="container" >
    <div className="header" >
        <div className="course" ><b>Settings</b></div>
        
        <button class="ui positive button">                       
        SAVE
        </button>
    </div>
    <Switch>
            <Route exact path ='/settings/' component={InstructorMail}/>
            <Route  path ='/settings/ParticipantMail' component={ParticipantMail}/>
        </Switch>
</div>

        );
}
 
export default Settings;
