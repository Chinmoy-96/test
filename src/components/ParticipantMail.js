import React from 'react';
import '../css/Addnewcourse.css';
import {Link} from 'react-router-dom';


function ParticipantMail() {

  return (
   

    <div className="Instructor-Mail-popup">
      
{/* <div head><h2>Settings <span> <button class="positive ui button Save-Button">Save</button></span></h2> </div> */}


<div className="Main-Box">

     <div className="Email-Template">
                      <p className="Instructor-Email-Template">Instructor email template</p>
                      <p className="Participant-Email-Template">Participant email template</p>
                     </div>
<div className="Email-Template-Bar">            
        <div className="line1"></div>  
      <div className="line3"></div>            
  </div>

  <div class="ui small form">
    <div className="labels">
      <label >Subject<span className="star">*</span></label>
 <label >Body<span className="star">*</span></label></div>
  <div class="two fields">
    <div class="field">
      <input  type="text"/>
    </div>

    <div class="field">
   
  <input type="text" placeholder="Upload Template"/>
  <button class="button">Browse</button>
  
</div>
  </div>
<div><p> Preview</p></div>

<div className="Preview">
<select className="dropdown">
    <option value="volchbdvo">Opensans</option>
    <option value="saafhdfhb">A</option>
    <option value="fifhdtat">B</option>
    <option value="audfhrdi">C</option>
  </select>
</div>
<div className="textarea">
 <textarea rows="16" cols="1 ">

 </textarea> 

</div>

</div>

<Link to="/settings/"><button class="ui grey button">Previous</button></Link>

</div>
</div>

  )
}
export default ParticipantMail;