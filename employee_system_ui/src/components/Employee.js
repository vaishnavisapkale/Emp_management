import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Employee = ({employee, deleteEmployee}) => {
   
     const navigate = useNavigate();
     const editEmployee = (e,id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);

     }
  return (
    <tr key={employee.id}>
          <td className='py-4 whitespace-nowrap'><div>{employee.firstName}</div></td>
          <td className='py-4 whitespace-nowrap'><div>{employee.lastName}</div></td>
          <td className='py-4 whitespace-nowrap'><div>{employee.email}</div></td>
          <td className='py-4 text-right '>
          <a onClick={(e,id) => editEmployee(e, employee.id)} 
          className='bg-sky-500 py-1 px-4 rounded hover:cursor-pointer mr-3 text-white'>Edit</a>

          <a onClick={(e,id) => deleteEmployee(e, employee.id)}
         className='bg-red-600 py-1 px-4 rounded hover:cursor-pointer text-white'>Delete</a>

          </td>
        </tr>
  )
}

export default Employee