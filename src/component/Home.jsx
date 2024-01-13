import React from 'react'
import image3 from '../assets/image3.jpeg'

const Home = () => {

    //here create a function myHomeStyle & giving the properties 
    let myHomeStyle={
       height:"92vh" ,
        backgroundImage:`url(${image3})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
    }
  return (
     <div style={myHomeStyle} className='d-flex justify-content-center align-items-center'>
        <h1 className='bg-info text-light display-2 fw-bold px-3 pb-2'>Welcome to react</h1>
    </div>
  )
}

export default Home