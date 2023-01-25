import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { useEffect } from 'react';

const UpdateEmployee = () => {

    const {id}= useParams();
    const navigate  = useNavigate();
    const[employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        email: "",
    });
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]:value})
    };

    useEffect(() => {
        const fetchData = async () => {
            try{
               const response = await EmployeeService.getEmployeebyId(id); 
               setEmployee(response.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchData();
    }, [])
    

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
        .then((response) => {
            navigate("/employeeList");
        })
        .catch((error) => {console.log(error);
        });
    }; 
  return (
    <div>
        <div className='flex max-w-2xl shadow border-b mx-auto'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl'>
                <h1>Update Employee</h1>
            </div>
            <div className='items-center my-4 h-14 w-full justify-center'>
                <label className='block text-gray-700 text-md font-normal'>
                  First Name
                </label>
                <input type='text'
                  name = "firstName"
                  value={employee.firstName}
                  onChange={(e) => handleChange(e) }
                className='h-10 w-96 border mt-2 p-2'></input>
            </div>
            <div className='items-center my-4 h-14 w-full justify-center'>
                <label className='block text-gray-700 text-md font-normal'>
                  Last Name
                </label>
                <input type='text'
                  name = "lastName"
                  value={employee.lastName}
                  onChange={(e) => handleChange(e) }
                className='h-10 w-96 border mt-2 p-2'></input>
            </div>
            <div className='items-center my-4 h-14 w-full justify-center'>
                <label className='block text-gray-700 text-md font-normal'>
                  Email
                </label>
                <input type='email' 
                 name = "email"
                 value={employee.email}
                 onChange={(e) => handleChange(e)}
                className='h-10 w-96 border mt-2 p-2'></input>
            </div>
            <div className='items-center my-4 h-14 w-full justify-center space-x-4'>
                <button onClick={updateEmployee} className='rounded text-white font-semibold bg-green-500 px-4 py-1 mt-3 hover:bg-blue-900'>Update</button>
                <button onClick={() => navigate("/EmployeeList")} className='rounded text-white font-semibold bg-red-500 px-4 py-1 mt-3 hover:bg-blue-900'>Cancel</button>
            </div>


        </div>
    </div>
    </div>
  )
}

export default UpdateEmployee