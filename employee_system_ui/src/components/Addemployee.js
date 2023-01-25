import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';

const Addemployee = () => {
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
    });

        const handleChange = (e) => {
            const value = e.target.value;
            setEmployee({...employee, [e.target.name]:value})
        };

        const saveEmployee = (e) => {
            e.preventDefault();
            EmployeeService.saveEmployee(employee)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        }
  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl'>
                <h1>Add New Employee</h1>
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
                <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-500 px-4 py-1 mt-3 hover:bg-blue-900'>Save</button>
            </div>


        </div>
    </div>
  )
}

export default Addemployee;