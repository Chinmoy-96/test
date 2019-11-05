import React from 'react';
import {useDispatch} from 'react-redux';
import Coursecard from './course-card';
import {DisplayBlock} from './action';
const Courses = () => {

    let dispatch=useDispatch();

  return (
    <div className="container" >
                    <div className="header" >
                        <div className="course" ><b>Courses</b></div>
                        <div class="ui left icon input">
                        <i aria-hidden="true" class="search link icon"></i>
                            <input type="text" placeholder="Search..." />                            
                        </div>
                        <button class="ui positive button" onClick={()=>{dispatch(DisplayBlock("coursepopup"))}}>                       
                        <span className="plusIcon">⨁  </span>
                        Create New
                        </button>
                    </div>
                    <Coursecard/>
                </div>

    );
}

export default Courses;


{
  /* <div class="column">
  <div class="ui segment">
  <div className="instructor-card">
  <div className="courseCard">
  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/115565539/original/85df4df6bddad168eb52111276b817fb5c7944d9/fix-or-do-anything-in-html-css-javascript-bootstrap.png" alt="angular.png"></img>
  <h5>Web Techonology <span>&#xB7;&#xB7;&#xB7; 
  <div className="edit_delete">
  <ul>
  <li>Edit</li>
  <li>Delete</li>
  </ul>
  </div>
  </span>
  </h5>
  <p>Course ID:</p>
  <p>Catogery:</p> 
  </div>
  </div>
  </div>
  </div>
  <div class="column">
  <div class="ui segment">
  <div className="courseCard">
  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/115565539/original/85df4df6bddad168eb52111276b817fb5c7944d9/fix-or-do-anything-in-html-css-javascript-bootstrap.png" alt="angular.png"></img>
  <h5>Web Techonology <span>&#xB7;&#xB7;&#xB7; 
  <div className="edit_delete">
  <ul>
  <li>Edit</li>
  <li>Delete</li>
  </ul>
  </div>
  </span>
  </h5>
  <p>Course ID:</p>
  <p>Catogery:</p> 
  </div>
  </div>
  </div>
  <div class="column">
  <div class="ui segment">
  <div className="courseCard">
  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/115565539/original/85df4df6bddad168eb52111276b817fb5c7944d9/fix-or-do-anything-in-html-css-javascript-bootstrap.png" alt="angular.png"></img>
  <h5>Web Techonology <span>&#xB7;&#xB7;&#xB7; 
  <div className="edit_delete">
  <ul>
  <li>Edit</li>
  <li>Delete</li>
  </ul>
  </div>
  </span>
  </h5>
  <p>Course ID:</p>
  <p>Catogery:</p> 
  </div>
  </div>
  </div>
  <div class="column">
  <div class="ui segment">
  <div className="courseCard">
  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/115565539/original/85df4df6bddad168eb52111276b817fb5c7944d9/fix-or-do-anything-in-html-css-javascript-bootstrap.png" alt="angular.png"></img>
  <h5>Web Techonology <span>&#xB7;&#xB7;&#xB7; 
  <div className="edit_delete">
  <ul>
  <li>Edit</li>
  <li>Delete</li>
  </ul>
  </div>
  </span>
  </h5>
  <p>Course ID:</p>
  <p>Catogery:</p> 
  </div>
  </div>
  </div>
  <div class="column">
  <div class="ui segment">
  <div className="courseCard">
  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/115565539/original/85df4df6bddad168eb52111276b817fb5c7944d9/fix-or-do-anything-in-html-css-javascript-bootstrap.png" alt="angular.png"></img>
  <h5>Web Techonology <span>&#xB7;&#xB7;&#xB7; 
  <div className="edit_delete">
  <ul>
  <li>Edit</li>
  <li>Delete</li>
  </ul>
  </div>
  </span>
  </h5>
  <p>Course ID:</p>
  <p>Catogery:</p> 
  </div>
  </div>
  </div>
  <div class="column">
  <div class="ui segment">
  <div className="courseCard">
  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/115565539/original/85df4df6bddad168eb52111276b817fb5c7944d9/fix-or-do-anything-in-html-css-javascript-bootstrap.png" alt="angular.png"></img>
  <h5>Web Techonology <span>&#xB7;&#xB7;&#xB7; 
  <div className="edit_delete">
  <ul>
  <li>Edit</li>
  <li>Delete</li>
  </ul>
  </div>
  </span>
  </h5>
  <p>Course ID:</p>
  <p>Catogery:</p> 
  </div>
  </div>
  </div>
  <div class="column">
  <div class="ui segment">
  <div className="instructor-card">
  <div className="courseCard">
  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/115565539/original/85df4df6bddad168eb52111276b817fb5c7944d9/fix-or-do-anything-in-html-css-javascript-bootstrap.png" alt="angular.png"></img>
  <h5>Web Techonology <span>&#xB7;&#xB7;&#xB7; 
  <div className="edit_delete">
  <ul>
  <li>Edit</li>
  <li>Delete</li>
  </ul>
  </div>
  </span>
  </h5>
  <p>Course ID:</p>
  <p>Catogery:</p> 
  </div>
  </div>
  </div>
  </div>
  <div class="column">
  <div class="ui segment">
  <div className="instructor-card">
  <div className="courseCard">
  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/115565539/original/85df4df6bddad168eb52111276b817fb5c7944d9/fix-or-do-anything-in-html-css-javascript-bootstrap.png" alt="angular.png"></img>
  <h5>Web Techonology <span>&#xB7;&#xB7;&#xB7; 
  <div className="edit_delete">
  <ul className="list">
  <li>Edit</li>
  <li>Delete</li>
  </ul>
  </div>
  </span>
  </h5>
  <p>Course ID:</p>
  <p>Catogery:</p> 
  </div>
  </div>
  </div>
  </div> */
}