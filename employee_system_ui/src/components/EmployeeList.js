import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
const navigate = useNavigate();
const [loading, setLoading] = useState(true);
const [employees, setEmployees] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try{
      const response = await EmployeeService.getEmployee();
      setEmployees(response.data);
    }catch(error){
      console.log(error);
    }
    setLoading(false);
  };
  fetchData();    
}, [])

const deleteEmployee = (e , id) => {
  e.preventDefault();
  EmployeeService.deleteEmployee(id).then((res) => {
    if(employees){
      setEmployees((prevElement) => {
        return prevElement.filter((employee) => employee.id !== id);
      } );
    }
  });
};

  return (
    <div className='container mx-auto my-8'>
    <div className='h-12'>
      <button 
      onClick={() => navigate("/addemployee")}
      className='rounded bg-slate-600 text-white px-5 py-1 font-semibold'>Add Employee</button>
    </div>

    <div className='flex shadow border-b  '>
     <table className='min-w-full'>
      <thead>
        <tr>
          <th className='text-left font-bold'>First Name</th>
          <th className='text-left font-bold'>Last Name</th>
          <th className='text-left font-bold'>Email Id</th>
          <th className='text-right font-bold'>Actions</th>
        </tr>
      </thead>
      {!loading && (
      <tbody>
        {employees.map((employee) => (
          <Employee employee={employee} deleteEmployee = {deleteEmployee} key = {employee.id}></Employee>
        ))}
      </tbody>
      )}
     </table>
    </div>
    </div>
   
  
   
  )
}

export default EmployeeList