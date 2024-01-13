
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const AllStudents = () => {

// useEffect(()=>{
// axios.get('http://localhost:8080/allstudents')
// .then(function (response){
//   setData([...response.data]);
// })
// },[])

// const [data, setData]=useEffect([])

//   return (
//     <div className='container'>
//       <h1 className='text-center my-4'>All Students</h1>

//       <table class="table table-dark table-hover table-bordered border-light w-50 table-striped mx-auto ">
//         <thead>
//           <tr>
//             <th scope="col" className='text-center'>Roll No</th>
//             <th scope="col" className='text-center'>Name</th>
//             <th scope="col" className='text-center'>DOB</th>
//             <th scope="col" className='text-center'>City</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             data.map(row => (
//               <tr key={row.rno}>
//                 <th scope="row">{row.rno}</th>
//                 <td>{row.name}</td>
//                 <td>{row.dob}</td>
//                 <td>{row.city}</td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default AllStudents



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Allstudents = () => {
  const [data, setData] = useState([]); // Initialize state with an empty array

  useEffect(() => {
    axios.get('http://localhost:8080/allstudents')
      .then(function (response) {
        setData([...response.data]);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='container-'>
      <h1 className='text-center py-4 '>All Students</h1>

      <table className="table table-dark table-hover table-bordered border-light w-50 table-striped mx-auto ">
        <thead>
          <tr>
            <th scope="col" className='text-center'>Roll No</th>
            <th scope="col" className='text-center'>Name</th>
            <th scope="col" className='text-center'>DOB</th>
            <th scope="col" className='text-center'>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.rno}>
              <th scope="row">{row.rno}</th>
              <td>{row.name}</td>
              <td>{row.dob}</td>
              <td>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allstudents;