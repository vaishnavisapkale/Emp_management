import Navbar from './components/Navbar';
import Addemployee from './components/Addemployee';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';


function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar />
     <Routes>
     <Route index element = { < EmployeeList/>}></Route>
      <Route path="/" element = { < EmployeeList/>}></Route>
      <Route path="/employeeList" element = { < EmployeeList/>}></Route>
     <Route path="/addemployee" element = {< Addemployee />}></Route>
     <Route path="/editemployee/:id" element = {<UpdateEmployee />}></Route>
     </Routes>
     </BrowserRouter>
     
     </>
  );
}

export default App;
