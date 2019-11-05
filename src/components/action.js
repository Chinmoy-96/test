import axios from 'axios';

export const DisplayBlock=(value)=>{
    return{
        type:'Block',
        popup:value
    };
}
export const DisplayNone=(value)=>{
    return{
        type:'None',
        popup:value
    };
}
export const Savecoursecategory=(value)=>async(dispatch,value)=>{
    localStorage.setItem('ping',JSON.stringify(value));
        console.log(value);
    let response=axios.get('http://localhost:3000/coursecategory');
    console.log(response);
    dispatch({type:"nothing"})
}
// categorypopup
// coursepopup
// instructorpopup