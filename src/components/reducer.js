export default function reducer(state={display1:"none",display2:"none",display3:"none"},action)
{
    switch(action.type){
            case 'Block':
            if(action.popup==='categorypopup')
            {return {display1:"block",display2:"none",display3:"none"}}
            if(action.popup==='coursepopup')
            {return {display1:"none",display2:"block",display3:"none"}}
            if(action.popup==='instructorpopup')
            {return {display1:"none",display2:"none",display3:"block"}}
            case 'None':
            if(action.popup==='categorypopup')
            {return {display1:"none",display2:"none",display3:"none"}}
            if(action.popup==='coursepopup')
            {return {display1:"none",display2:"none",display3:"none"}}
            if(action.popup==='instructorpopup')
            {return {display1:"none",display2:"none",display3:"none"}}
            default:
            return state;
    }

}