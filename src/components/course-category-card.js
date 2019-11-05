import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Coursecategoriescard = () => {
let [dum, setdum] = useState([]);
  useEffect(() => {
    setdum(axios.get('http://localhost:3000/coursecategory').then(result => {
      localStorage.setItem('data', JSON.stringify(result.data))

    }
    ))
  }, []);
  let result = JSON.parse(localStorage.getItem('data'));

  let visual = [];
  if(result!==null){
  result.map((element, index) => {

    visual.push(<div class="column">
    <div class="ui segment">
    
    <div className="categoryCard">
    <img src={element.image} alt="angular.png" height="150vh"></img>
    <h5>{element.categoryname}<span>··· 
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
    </div>);
  });}
  console.log(result);

return(
<div className="body" >
                
                <div class="ui four column grid">
                {visual}
                </div>
            </div>

);
}

export default Coursecategoriescard;