import React from 'react';
import {useSelector} from 'react-redux';
import Dashboard from './components/dashboard';
import Addcategorypopup from './components/addcategorypopup';
import Addcoursepopup from './components/addcoursepopup';
import InstructorAddpopup from './components/addinstructorpopup';
import {BrowserRouter ,Route} from 'react-router-dom';
function App() {

  let display=useSelector(state=>state);
  console.log(display);
// console.log(display.display1+":::"+display.display2+"::::"+display.display3);
  return (  
  
      <div>
       <Dashboard/>
      <div style={{display:display.display1}}>
       <Addcategorypopup/>
       </div>
       <div style={{display:display.display2}}>
       <Addcoursepopup/>
       </div>
       <div style={{display:display.display3}}>
       <InstructorAddpopup/>
       </div> 
      </div>
     
    );
}
export default App;
