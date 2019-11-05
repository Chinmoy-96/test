import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Sessioncard = () => {
    return(<div className="body">
        <div class="ui two column grid">
        <div class="column inner-session-card">
        <div class="ui segment sessionwise-card">
        
        <div className="sessionCard" >
    <div className="session-card-image" ><img src="https://technostacks.com/wp-content/uploads/2016/12/enterprise_solution.jpg" /></div>
    <div className="session-card-text" ><h5>Enterprise App Development With AngularJS <span>&#xB7;&#xB7;&#xB7; 
    <div className="edit_delete">
    <ul>
    <li>Edit</li>
    <li>Delete</li>
    </ul>
    </div>
    </span>
    </h5>
    <div className="icons" >
        <div className="icon-text" >                       
            <p><i class="user outline green icon"></i>Ranjit B</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="microphone green icon"></i>Online</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="calendar alternate outline green icon"></i>8th Dec 2018</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="clock outline green icon"></i>05:35AM-07:45AM</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="users green icon"></i>32</p>
        </div>
    </div>
    </div>
</div>                       
</div>
</div>
<div class="column">
        <div class="ui segment sessionwise-card">
        
        <div className="sessionCard" >
    <div className="session-card-image" ><img src="https://technostacks.com/wp-content/uploads/2016/12/enterprise_solution.jpg" /></div>
    <div className="session-card-text" ><h5>Enterprise App Development With AngularJS <span>&#xB7;&#xB7;&#xB7; 
    <div className="edit_delete">
    <ul>
    <li>Edit</li>
    <li>Delete</li>
    </ul>
    </div>
    </span>
    </h5>
    <div className="icons" >
        <div className="icon-text" >                       
            <p><i class="user outline green icon"></i>Ranjit B</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="microphone green icon"></i>Online</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="calendar alternate outline green icon"></i>8th Dec 2018</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="clock outline green icon"></i>05:35AM-07:45AM</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="users green icon"></i>32</p>
        </div>
    </div>
    </div>
</div>                       
</div>
</div>
<div class="column">
        <div class="ui segment sessionwise-card">
        
        <div className="sessionCard" >
    <div className="session-card-image" ><img src="https://technostacks.com/wp-content/uploads/2016/12/enterprise_solution.jpg" /></div>
    <div className="session-card-text" ><h5>Enterprise App Development With AngularJS <span>&#xB7;&#xB7;&#xB7; 
    <div className="edit_delete">
    <ul>
    <li>Edit</li>
    <li>Delete</li>
    </ul>
    </div>
    </span>
    </h5>
    <div className="icons" >
        <div className="icon-text" >                       
            <p><i class="user outline green icon"></i>Ranjit B</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="microphone green icon"></i>Online</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="calendar alternate outline green icon"></i>8th Dec 2018</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="clock outline green icon"></i>05:35AM-07:45AM</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="users green icon"></i>32</p>
        </div>
    </div>
    </div>
</div>                       
</div>
</div>
<div class="column">
        <div class="ui segment sessionwise-card">
        
        <div className="sessionCard" >
    <div className="session-card-image" ><img src="https://technostacks.com/wp-content/uploads/2016/12/enterprise_solution.jpg" /></div>
    <div className="session-card-text" ><h5>Enterprise App Development With AngularJS <span>&#xB7;&#xB7;&#xB7; 
    <div className="edit_delete">
    <ul>
    <li>Edit</li>
    <li>Delete</li>
    </ul>
    </div>
    </span>
    </h5>
    <div className="icons" >
        <div className="icon-text" >                       
            <p><i class="user outline green icon"></i>Ranjit B</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="microphone green icon"></i>Online</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="calendar alternate outline green icon"></i>8th Dec 2018</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="clock outline green icon"></i>05:35AM-07:45AM</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="users green icon"></i>32</p>
        </div>
    </div>
    </div>
</div>                       
</div>
</div>
<div class="column">
        <div class="ui segment sessionwise-card">
        
        <div className="sessionCard" >
    <div className="session-card-image" ><img src="https://technostacks.com/wp-content/uploads/2016/12/enterprise_solution.jpg" /></div>
    <div className="session-card-text" ><h5>Enterprise App Development With AngularJS <span>&#xB7;&#xB7;&#xB7; 
    <div className="edit_delete">
    <ul>
    <li>Edit</li>
    <li>Delete</li>
    </ul>
    </div>
    </span>
    </h5>
    <div className="icons" >
        <div className="icon-text" >                       
            <p><i class="user outline green icon"></i>Ranjit B</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="microphone green icon"></i>Online</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="calendar alternate outline green icon"></i>8th Dec 2018</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="clock outline green icon"></i>05:35AM-07:45AM</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="users green icon"></i>32</p>
        </div>
    </div>
    </div>
</div>                       
</div>
</div>
<div class="column">
        <div class="ui segment sessionwise-card">
        
        <div className="sessionCard" >
    <div className="session-card-image" ><img src="https://technostacks.com/wp-content/uploads/2016/12/enterprise_solution.jpg" /></div>
    <div className="session-card-text" ><h5>Enterprise App Development With AngularJS <span>&#xB7;&#xB7;&#xB7; 
    <div className="edit_delete">
    <ul>
    <li>Edit</li>
    <li>Delete</li>
    </ul>
    </div>
    </span>
    </h5>
    <div className="icons" >
        <div className="icon-text" >                       
            <p><i class="user outline green icon"></i>Ranjit B</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="microphone green icon"></i>Online</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="calendar alternate outline green icon"></i>8th Dec 2018</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="clock outline green icon"></i>05:35AM-07:45AM</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="users green icon"></i>32</p>
        </div>
    </div>
    </div>
</div>                       
</div>
</div>
<div class="column">
        <div class="ui segment sessionwise-card">
        
        <div className="sessionCard" >
    <div className="session-card-image" ><img src="https://technostacks.com/wp-content/uploads/2016/12/enterprise_solution.jpg" /></div>
    <div className="session-card-text" ><h5>Enterprise App Development With AngularJS <span>&#xB7;&#xB7;&#xB7; 
    <div className="edit_delete">
    <ul>
    <li>Edit</li>
    <li>Delete</li>
    </ul>
    </div>
    </span>
    </h5>
    <div className="icons" >
        <div className="icon-text" >                       
            <p><i class="user outline green icon"></i>Ranjit B</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="microphone green icon"></i>Online</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="calendar alternate outline green icon"></i>8th Dec 2018</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="clock outline green icon"></i>05:35AM-07:45AM</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="users green icon"></i>32</p>
        </div>
    </div>
    </div>
</div>                       
</div>
</div>
<div class="column">
        <div class="ui segment sessionwise-card">
        
        <div className="sessionCard" >
    <div className="session-card-image" ><img src="https://technostacks.com/wp-content/uploads/2016/12/enterprise_solution.jpg" /></div>
    <div className="session-card-text" ><h5>Enterprise App Development With AngularJS <span>&#xB7;&#xB7;&#xB7; 
    <div className="edit_delete">
    <ul>
    <li>Edit</li>
    <li>Delete</li>
    </ul>
    </div>
    </span>
    </h5>
    <div className="icons" >
        <div className="icon-text" >                       
            <p><i class="user outline green icon"></i>Ranjit B</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="microphone green icon"></i>Online</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="calendar alternate outline green icon"></i>8th Dec 2018</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="clock outline green icon"></i>05:35AM-07:45AM</p>
        </div>
        <div className="icon-text" >                       
            <p><i class="users green icon"></i>32</p>
        </div>
    </div>
    </div>
</div>                       
</div>
</div>
</div> 
</div>         
    );
}
export default Sessioncard;