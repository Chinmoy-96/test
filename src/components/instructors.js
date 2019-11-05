import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import Instructorcard from './instructor-card';
import axios from 'axios';
import {DisplayBlock} from './action';
const Instructors = () => {
  let dispatch=useDispatch();

  return (
    <div className="container" >
    <div className="header" >
        <div className="course" ><b>Instructors</b></div>
        
        <button class="ui positive button" onClick={()=>{dispatch(DisplayBlock("instructorpopup"))}}>                       
        <span className="plusIcon">⨁</span>&nbsp;
        Create New
        </button>
    </div>
    <Instructorcard/>
</div>


    );
}

export default Instructors;


{
  /* <div class="column">
      <div class="ui segment">
      <div className="instructor-card">
      
    <img  src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/b2928d2/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F7f%2F38%2Fb37d0d6148e48fea8f76209eb3bb%2Fbigstock-pretty-teacher-smiling-at-came-69887626-1.jpg"width="100%"/>
     <h5>names<span>···<div className="edit_delete hoverappear">
       <ul>
         <li>Edit</li>
         <li>Delete</li>
         </ul>
     </div></span></h5>
     <h6>Email</h6>
     <p>emails</p>
    </div>
      </div>
    </div>
    <div class="column">
      <div class="ui segment">
      <div className="instructor-card">
      
    <img  src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/b2928d2/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F7f%2F38%2Fb37d0d6148e48fea8f76209eb3bb%2Fbigstock-pretty-teacher-smiling-at-came-69887626-1.jpg"width="100%"/>
     <h5>names<span>···<div className="edit_delete hoverappear">
       <ul>
         <li>Edit</li>
         <li>Delete</li>
         </ul>
     </div></span></h5>
     <h6>Email</h6>
     <p>emails</p>
    </div>
      </div>
    </div>
    <div class="column">
      <div class="ui segment">
      <div className="instructor-card">
      
    <img  src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/b2928d2/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F7f%2F38%2Fb37d0d6148e48fea8f76209eb3bb%2Fbigstock-pretty-teacher-smiling-at-came-69887626-1.jpg"width="100%"/>
     <h5>names<span>···<div className="edit_delete hoverappear">
       <ul>
         <li>Edit</li>
         <li>Delete</li>
         </ul>
     </div></span></h5>
     <h6>Email</h6>
     <p>emails</p>
    </div>
      </div>
    </div>
    <div class="column">
      <div class="ui segment">
      <div className="instructor-card">
      
    <img  src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/b2928d2/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F7f%2F38%2Fb37d0d6148e48fea8f76209eb3bb%2Fbigstock-pretty-teacher-smiling-at-came-69887626-1.jpg"width="100%"/>
     <h5>names<span>···<div className="edit_delete hoverappear">
       <ul>
         <li>Edit</li>
         <li>Delete</li>
         </ul>
     </div></span></h5>
     <h6>Email</h6>
     <p>emails</p>
    </div>
      </div>
    </div>
    <div class="column">
      <div class="ui segment">
      <div className="instructor-card">
      
    <img  src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/b2928d2/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F7f%2F38%2Fb37d0d6148e48fea8f76209eb3bb%2Fbigstock-pretty-teacher-smiling-at-came-69887626-1.jpg"width="100%"/>
     <h5>names<span>···<div className="edit_delete hoverappear">
       <ul>
         <li>Edit</li>
         <li>Delete</li>
         </ul>
     </div></span></h5>
     <h6>Email</h6>
     <p>emails</p>
    </div>
      </div>
    </div>
    <div class="column">
      <div class="ui segment">
      <div className="instructor-card">
      
    <img  src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/b2928d2/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F7f%2F38%2Fb37d0d6148e48fea8f76209eb3bb%2Fbigstock-pretty-teacher-smiling-at-came-69887626-1.jpg"width="100%"/>
     <h5>names<span>···<div className="edit_delete hoverappear">
       <ul>
         <li>Edit</li>
         <li>Delete</li>
         </ul>
     </div></span></h5>
     <h6>Email</h6>
     <p>emails</p>
    </div>
      </div>
    </div> */
}