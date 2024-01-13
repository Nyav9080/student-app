import React, { useState } from 'react'
import axios from 'axios';

const ViewStudent = () => {

  const[rno, setRno]=useState('');
  const [data,setData]=useState(null)

  const searchStudent=()=>{
    axios.get(`http://localhost:8080/student/${rno}`)
    .then(function (response) {
      setData(response.data)
    })
  }

  return (
    <div className='p-3'>
      <h1 className='text-center py-4'>View Student</h1>
        
        <div className="d-flex justify-content-center">
            <label htmlFor="stud_name" className="px-3">Enter Roll No:</label>
            <input type="number" className="px-3" placeholder="Roll no.." />
            <button className='btn btn-dark px-3' onClick={searchStudent}>Search</button>
          </div>
          {
            (data != null)?
            (<div className='w-50 border-danger border-3'>
            <h2>Student info</h2>

            <h1>Rno:{data.rno}</h1>
            <h2>Name:{data.name}</h2>
            <h2>Dob:{data.dob}</h2>
            <h2>City:{data.city}</h2>
            </div>):""
          }
        
    </div>
  )
}

export default ViewStudent