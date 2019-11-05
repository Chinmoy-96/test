import React from 'react'
import {Link} from 'react-router-dom';
import Switch from 'react-input-switch';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {DisplayNone} from './action';
function Newcourse() {
  let dispatch=useDispatch();
  const [value, setValue] = useState('no');
const Dummy = () => { 
return <Switch on="yes" off="no" value={value} onChange={setValue} />;
};
  return (
    <React.Fragment>
    <div className="create_course_popup"></div>
             <div className="flex-container">
                  <h4 className="header">Create New Course<span className='close' onClick={()=>{dispatch(DisplayNone("coursepopup"))}} style={{cursor:"pointer"}}>x</span></h4><br/><br/>
                  <hr className="under-line"/>
                  
                     <div className="flex-container1">
                       <p className="course">Course Details</p>
                        <p className="get">Git Details</p>
                     </div>
               
                          <div className="flex-container2">            
                               <div className="line1"></div>  
                              <div className="line2"></div>            
                          </div>

<div className="form">


        <form className="ui form">
            <div className="field">
                <label >Name:<span className="color">*</span></label>
                <input type="text" name="first-name" placeholder="Course Name"/> 
            </div>
 
<div className="field">
<label>Course Category:<span className="color">*</span></label>
      <div role="listbox" aria-expanded="false" class="ui fluid selection dropdown" tabindex="0">
        <div class="default text" role="alert" aria-live="polite" aria-atomic="true">Select Category</div>
        <i aria-hidden="true" class="dropdown icon"></i>

</div>
</div>



<div>
  <p>Upload Image</p>
  <div className="inline">
<div class="addnewcourse">
    
<div class="add-image">
<label class="viewImage" for="file-input">
<i class="fa fa-file" aria-hidden="true"></i>
</label>

<input id="file-input" type="file" src="pictures" />
</div>
</div>
<p className='note-text' >Note:Image size must be lesser than 2MB</p>
</div>
</div>


<div className="status">
  <span className="checkbox" style={{color:`${(value==='no')?'black':'gray'}`}}>Status</span> 
  &emsp;
  {Dummy()}
   &emsp;
   <span className="checkbox" style={{color:`${(value==='yes')?'black':'gray'}`}}>Active</span>
   </div>




<div className="buttons"> 
<Link to="/GitDetails"><button class="ui grey button">Next</button></Link>

<button class="ui black basic button">Cancel</button>
</div>


 </form>
</div>



 </div>
 </React.Fragment>
    );
}
export default Newcourse;