import React from 'react'
import {Link} from 'react-router-dom';
import Switch from 'react-input-switch';
import {useDispatch} from 'react-redux';
import {DisplayNone} from './action';
import {useState} from 'react'
function GitDetails() {
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
                <div></div>
                     <div className="flex-container1">
                        <p className="course">Course Details</p>
                        <p className="get">Git Details</p>
                     </div>
               
            <div className="flex-container2">            
                    <div class="line1"></div>  
                   
                     <div class="line3"></div>            
             </div>


            <div className="form">
                    <form class="ui form">
                     <div class="field">
                     <label >Git Repo Name:<span className="color">*</span></label>
                     <input type="text" name="first-name" placeholder="Get Repo Name"/> 
            </div>
            <div class="field">
                     <label >Git Directory Name:<span className="color">*</span></label>
                     <input type="text" name="first-name" placeholder="Get Directory Name"/> 
            </div>
            <div class="field">
                    <label >Git Access Token:<span className="color">*</span></label>
                    <input type="text" name="first-name" placeholder="Get Access Token"/> 
            </div>
            <div class="field">
                    <label >Git User Name<span className="color">*</span></label>
                    <input type="text" name="first-name" placeholder="Get User Name"/> 
             </div>

             <div className="status">
  <span className="checkbox" style={{color:`${(value==='no')?'black':'gray'}`}}>Is Lab Item</span> 
  &emsp;
  {Dummy()}
   &emsp;
   <span className="checkbox" style={{color:`${(value==='yes')?'black':'gray'}`}}>No</span>
   </div>

            <div class="field">
                    <label >File Name</label>
                        <input type="text" name="first-name" placeholder="File Name"/> 
            </div>
            <div className="git-button"> 
              <Link to ="/" exact  >  <button class="ui grey button">Previous</button></Link>
                <button class="ui green button">Save</button>
                <button class="ui black basic button">Cancel</button>
            </div>

                  </form>
            </div>  
      </div>                
      </React.Fragment>
  )
}
export default GitDetails;