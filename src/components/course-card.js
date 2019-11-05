import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Coursecard = () => {
  let [dum, setdum] = useState([]);
  
  useEffect(() => {
    setdum(axios.get('http://localhost:3000/courses').then(result => {
      localStorage.setItem('data2', JSON.stringify(result.data))
                                                                    }
                                                            ))
                    }, []);
  
  
  let categories = JSON.parse(localStorage.getItem('data'));
  let courses = JSON.parse(localStorage.getItem('data2'));


  let data = [];
  if(categories!==null && courses!==null){
  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < courses.length; j++) {
      if (categories[i].cartegoryid == courses[j].categoryid) {
        courses[j].categoryname = categories[i].categoryname;
        data.push(courses[j]);
      }
    }
  }}

  let visual = [];
  if(data!==null){
  data.map((element, index) => {
    visual.push(
      <div class="column">
<div class="ui segment">
    <div className="instructor-card">
        <div className="courseCard">
            <img src={element.courseimage} alt="angular.png"  height="130vh"></img>
            <h5>{element.coursename} 
                <span>··· 
                        <div className="edit_delete">
                            <ul>
                                <li>Edit</li>
                                <li>Delete</li>
                            </ul>
                        </div>
                    </span>
            </h5>
            <p>Course-ID:{element.courseid}</p>
            <p>Category:{element.categoryname}</p> 
        </div>
    </div>
</div>
</div>);
  })}

  return (
    <div className="body">  
                        <div class="ui four column grid">
                        {visual}
                        </div>
                    </div>
    );
}

export default Coursecard;