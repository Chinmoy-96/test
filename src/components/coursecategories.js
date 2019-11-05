import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import Coursecategoriescard from './course-category-card';
import axios from 'axios';
import {DisplayBlock} from './action';
const Coursecategories = () => {
    let dispatch=useDispatch();

  return (
        <div className="container" >
            <div className="header" >
                <div className="course" ><b>Course Categories</b></div>
                <div class="ui left icon input">
                <i aria-hidden="true" class="search link icon"></i>
                    <input type="text" placeholder="Search..." />                            
                </div>
                <button class="ui positive button" onClick={()=>{dispatch(DisplayBlock('categorypopup'))}}>                       
                <span className="plusIcon">⨁  </span>
                Create New
                </button>
            </div>
            <Coursecategoriescard/>
        </div>
    );
}

export default Coursecategories;





{
  /* <div class="column">
                  <div class="ui segment">
                  <div className="instructor-card">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               
                   </p>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div class="column">
                  <div class="ui segment">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  
                   </p>
                  </div>
                  </div>
                  </div>
                  <div class="column">
                  <div class="ui segment">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  
                   </p>
                  </div>
                  </div>
                  </div>
                  <div class="column">
                  <div class="ui segment">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                
                   </p>
                  </div>
                  </div>
                  </div>
                  <div class="column">
                  <div class="ui segment">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 
                   </p>
                  </div>
                  </div>
                  </div>
                  <div class="column">
                  <div class="ui segment">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  
                   </p>
                  </div>
                  </div>
                  </div>
                  <div class="column">
                  <div class="ui segment">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 
                   </p>
                  </div>
                  </div>
                  </div>
                  <div class="column">
                  <div class="ui segment">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  
                   </p>
                  </div>
                  </div>
                  </div>
                  <div class="column">
                  <div class="ui segment">
                  <div className="instructor-card">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 
                   </p>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div class="column">
                  <div class="ui segment">
                  <div className="instructor-card">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            
                   </p>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div class="column">
                  <div class="ui segment">
                  <div className="instructor-card">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            
                   </p>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div class="column">
                  <div class="ui segment">
                  <div className="instructor-card">
                  <div className="categoryCard">
                  <img src="https://miro.medium.com/max/441/1*15CYVZdpsxir8KLdxEZytg.png" alt="angular.png"></img>
                  <h5>AngularJS <span>&#xB7;&#xB7;&#xB7; 
                  <div className="edit_delete">
                  <ul>
                  <li>Edit</li>
                  <li>Delete</li>
                  </ul>
                  </div>
                  </span>
                  </h5><br></br>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  
                   </p>
                  </div>
                  </div>
                  </div>
                  </div> */
}