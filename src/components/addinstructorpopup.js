
import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {DisplayNone} from './action';
import Switch from 'react-input-switch';
import '../css/addinstructor.css';

function InstructorAddpopup()
{
   
let dispatch=useDispatch();
    const [value, setValue] = useState('no');
    const Dummy = () => {
      return <Switch on="yes" off="no" value={value} onChange={setValue} />;
    };
  
    return (<React.Fragment>
        <div className='instructor_popup'>
        </div>
        <div className='instructor_popup_box'>
          <h4 className='add_heading'>Add instructor<span><i class="fa fa-times close_icon" aria-hidden="true" onClick={()=>{dispatch(DisplayNone("instructorpopup"))}} style={{cursor:"pointer"}}></i></span></h4>
          <hr/>
            <form class="ui form">
                <div class="field">
                    <label>First Name<span className='required_asterick'>*</span></label>
                    <input placeholder="First Name" required />
                 </div>
                <div class="field">
                    <label>Last Name<span className='required_asterick'>*</span></label>
                    <input placeholder="Last Name" required />
                 </div>
                <div class="field">
                    <label>E-mail<span className='required_asterick'>*</span></label>
                    <input placeholder="E-mail" required />
                </div>
                <p> Upload Image</p>
                <div className="upload-inline">
                
    <div class="input-upload">
    <label class="viewImage" for="file-input">
    <img alt="" className="upload-image" src="
    https://lh3.googleusercontent.com/-wXESgc-C8qk/Xbko6QsIuBI/AAAAAAAAACI/EYA9rlw8VJcEG3Y3vDfl1CrFxlnqYkM_ACK8BGAsYHg/s0/uploadImg.png" />
    </label>
    <input id="file-input" type="file" src="pictures" /> 
    </div> 
    <p className="note">Note:Image size should be less then 2MB </p>
    </div>
          
                <div className="status">
                  <span className="checkbox" style={{
          color: `${(value === 'no') ? 'black' : 'gray'}`
        }}>Status</span> 
                    
                  {Dummy()}
                   
                  <span className="checkbox" style={{
          color: `${(value === 'yes') ? 'black' : 'gray'}`
        }}>Active</span>
                </div>
                <br/>
                <div className='buttons_flex'>
                <button type="submit" class="ui grey button">Save</button>
                <button type="submit" class="ui black basic button">Cancel</button>
                </div>
            </form>
        </div>
        </React.Fragment>
     );
}
export default InstructorAddpopup;
//addinstructorpopup