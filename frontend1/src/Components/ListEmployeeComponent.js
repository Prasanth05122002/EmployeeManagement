import React, { useEffect, useState } from 'react'
import EmployeeService from '../Services/EmployeeService'
import { Link } from 'react-router-dom';

import employeeServiceInstance from '../Services/EmployeeService';
const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState(null); // Initialize employees state with null
  

    useEffect(()=>{
        EmployeeService.getAllEmployees().then((response)=>{
            setEmployees(response.data)
            console.log(response.data)
        }).catch((e)=>{
            console.log(e)
        })
    },[]);
    const deleteEmployee = (id) => {
        employeeServiceInstance.deleteEmployee(id)
            .then((response) => {
                console.log('Employee deleted successfully:', response.data);
                // After deletion, fetch updated employee list
                EmployeeService.getAllEmployees()
                    .then((response) => {
                        setEmployees(response.data);
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.error('Error fetching employees after deletion:', error);
                    });
               
            })
            .catch((error) => {
                console.error('Error deleting employee:', error);
            });
    };

    
    return (
        <div className='container'>
            <h2 className='text-center'>List Employees</h2>
            <Link to="/add-employee" className="btn btn-success">Add Employee</Link>
            {employees && employees.length > 0 ? ( // Check if employees is not null or undefined
                <table className='table table-bordered table-striped'>
                    <thead>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email-ID</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {employees.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.emailId}</td>
                                <td>
                                    <Link className='btn btn-info' to= {`/edit-employee/${e.id}`} >Update</Link>
                                    <Link className='btn btn-danger' to= {`/employees`} onClick={()=>deleteEmployee(e.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
    
    
}

export default ListEmployeeComponent