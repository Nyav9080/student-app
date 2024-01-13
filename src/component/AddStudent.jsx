import React, { useState } from 'react'
import axios from 'axios';

const AddStudent = () => {
  const [rno,setRno] = useState('');
  const [name,setName] = useState('');
  const [dob,setDob] = useState('');
  const [city,setCity] = useState('');

  const [showAlert,setShowAlert]=useState(false)

const handleClick =  () => {
  let stud = {
    "rno":rno,
    "name":name,
    "dob":dob,
    "city":city
  }
  if (!(rno=='' || name=='' || dob=='' || city=='')){
    axios.post('http://localhost:8080/insert/stud',stud)
    .then(function(response){
    
    setRno('');
    setName('');
    setDob('');
    setCity('');

    setShowAlert(true)
    
  })
  .catch(function (error){
    console.log(error);
  });
 
} 
}

setTimeout(() => {
  setShowAlert(false)
},2000);

  return (
    <>
    {
      showAlert && (<div class="alert alert-success" role="alert">
        Record Saved Successfully
        </div>)
    }
    <div className='d-flex flex-column justify-content-center align-items-center'>
           
           <h1 className='text-center my-3'>Add Student</h1>
      <div className='p-4 w-50 border border-dark rounded-5'>
     

        
        <div class="mb-3">
            <label htmlFor="stud_name" class="form-label">Student Roll No :</label>
            <input type="email" class="form-control" id="" placeholder="" />
          </div>
          <div class="mb-3">
            <label htmlFor="stud_name" class="form-label">Student Name :</label>
            <input type="name" class="form-control" id="" placeholder="" />
          </div>
          
          <div class="mb-3">
            <label htmlFor="stud_mob" class="form-label">Student DOB :</label>
            <input type="" class="form-control" id="" placeholder="" />
          </div>
          <div class="mb-3">
            <label htmlFor="stud_addr" class="form-label">Student City :</label>
            <input type="addr" class="form-control" id="" placeholder="" />
          </div>
      <div className='d-flex justify-content-center'>
      <button className='btn btn-dark' onClick={handleClick}>Add Student</button>
      </div>
      
    </div>
  </div >  
  </>
  )
}

export default AddStudent