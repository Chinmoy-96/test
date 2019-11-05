import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {DisplayNone,Savecoursecategory} from './action';
import { Form,Button } from 'semantic-ui-react';
import Switch from 'react-input-switch';
import '../css/createNewCategory.css';

function Addcategorypopup()
{
    
   let dispatch=useDispatch();
    const [value, setValue] = useState('no');
    const Dummy = () => {
      return <Switch on="yes" off="no" value={value} onChange={setValue} />;
    };
    const [data, setData] = useState({name:"",textarea:"",fileImage:""});

    let filedata;
        
    let filehandle=(value)=>{
    console.log(value[0]);
    if (value.length > 0) {
    var fileToLoad = value[0];
    let fileReader = new FileReader();
    fileReader.onload = (fileLoadedEvent) => {
        console.log(fileLoadedEvent.target.result);
      let srcData = fileLoadedEvent.target.result;
      data.fileImage=fileLoadedEvent.target.result;
    //   photovalue= fileLoadedEvent.target.result;
      let deta = srcData.split(",");
        console.log(deta[1]);
    }
    fileReader.readAsDataURL(fileToLoad);
    
    }}


    return (
      <div className="adding-elements" style={{
        display: `${'block'}`
      }}>
      <div className="content">
          <form onSubmit={()=>{  dispatch(Savecoursecategory({name:data.name,description:data.textarea,status:value}))}}>
              <div className="add-new">
                  <p className="remove">Create New Course Category
                      <span onClick={()=>{dispatch(DisplayNone("categorypopup"))}} style={{cursor:"pointer"}}>X</span>
                  </p>
              </div>
              <hr className="underline" />
              <div className="content-div">
                  <div className="unique-id "></div>
                  <p className="text-font">Name<span className="conditions-apply">*</span></p>
                  <Form.Field>
            <input placeholder='Course Name' className="input-style" value={data.name}  onChange={(e)=>{setData({...data,name:e.target.value})}} />
         </Form.Field>
                  <p className="text-font" >Description<span className="conditions-apply">*</span></p>
                  <textarea className="input-style2" placeholder="Write here" rows="3" cols="51" value={data.textarea} onChange={(e)=>{setData({...data,textarea:e.target.value})}} ></textarea>
                  <p className="text-font" >Upload Image</p>
                
                  <div className="upload-inline">
                  <div class="input-upload">
  
                      <label class="viewImage" for="file-input">
                      <img alt="" className="upload-image" src="
https://lh3.googleusercontent.com/-wXESgc-C8qk/Xbko6QsIuBI/AAAAAAAAACI/EYA9rlw8VJcEG3Y3vDfl1CrFxlnqYkM_ACK8BGAsYHg/s0/uploadImg.png" />
                      </label>
  
                      <input id="file-input" type="file" src="pictures"  onChange={(e)=>filehandle(e.target.files)}/>;
                    
                   
                      </div>   
                      <p className="note">Note:Image size should be less then 2MB </p>
                      </div>
                       <div><span className="checkbox" style={{color: `${(value === 'no') ? 'black' : 'gray'}`}}>Status</span>  {Dummy()}  <span className="checkbox" style={{ color: `${(value === 'yes') ? 'black' : 'gray'}`}}>Active</span></div>
                  <div className="add-btn" style={{ display: `${'block'}`}}>
                        <Button  id="btn-save" content='Save'  />
                            &nbsp;
                         <Button basic color='grey' content='Cancel' />
                  </div>
              </div>
          </form>
      </div>
  </div>
    )
  }
export default Addcategorypopup;