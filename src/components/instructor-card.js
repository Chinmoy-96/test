
import React,{useEffect,useState} from 'react';

import axios from 'axios';
function Instructorcard()
{
    let visual=[];
    let [dum, setdum] = useState([]);
      useEffect(() => {
         setdum(axios.get('http://localhost:3000/instructors').then(result=>{localStorage.setItem('data3',JSON.stringify(result.data))
           console.log(result.data);
          
      }
        ))
      }, []);
  let result=JSON.parse(localStorage.getItem('data3'));
  if(result!==null){   
  result.map((element,index)=>{
        console.log(element);
    visual.push( <div class="column">
    <div class="ui segment">
    <div className="instructor-card">
    
  <img  src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/b2928d2/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F7f%2F38%2Fb37d0d6148e48fea8f76209eb3bb%2Fbigstock-pretty-teacher-smiling-at-came-69887626-1.jpg" height="100vh" width="100%"/>
   <h5>{element.firstname}&nbsp;&nbsp;{element.lastname}<span>···<div className="edit_delete hoverappear">
     <ul>
       <li>Edit</li>
       <li>Delete</li>
       </ul>
   </div></span></h5>
   <h6>Email</h6>
   <p>{element.email}</p>
  </div>
    </div>
  </div>)
   }) }
      console.log(visual);

      return(
    <div className="instructor-cardsection">
<div class="ui six column grid">
  {visual}
</div>
</div>
);
}
export default Instructorcard;