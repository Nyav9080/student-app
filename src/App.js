import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/NavBar';
import AllStudents from './component/AllStudents';
import AddStudent from './component/AddStudent';
import ViewStudent from './component/ViewStudent';
import Home from './component/Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
    <BrowserRouter>
    <NavBar/>
    <Routes>
    {/* <Route path="/" element={<Home/>}/> */}
    <Route path="Home" element={<Home/>}/>
    <Route path="/allstudents" element={<AllStudents/>}/>
    <Route path="/addstudent" element={<AddStudent/>}/>
    <Route path="/viewstudent" element={<ViewStudent/>}/>
    </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
