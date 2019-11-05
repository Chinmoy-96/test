import React from 'react';
import Sessioncard from './session-card';
import '../css/dashboard.css'
const Sessions = () => {
    return ( 
        <div className="container" >
            <div className="header" >
                <div className="course" ><b>Sessions</b></div>
                <button class="ui positive button">                       
                <span className="plusIcon">⨁</span>&nbsp;
                Create New
                </button>
            </div>
            <Sessioncard/>
        </div>
     );
}
 
export default Sessions;