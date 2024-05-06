import React, { useEffect, useState } from 'react';
import employeeServiceInstance from '../Services/EmployeeService';
import {useNavigate, useParams} from "react-router-dom";
import { Link } from 'react-router-dom';

const AddEmployeeComponent = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[emailId,setEmailId]=useState("");
    const navigate=useNavigate();
    const {id} =useParams();


    const saveOrUpdateEmployee=(e)=>{
        e.preventDefault();
        const employee={firstName,lastName,emailId}
        if(id){
            employeeServiceInstance.updateEmployee(id,employee).then((response)=>{
                console.log(response.data)
                navigate("/employees");
    
            }).catch(error=>{
                console.log(error)
            })
        }else{
        employeeServiceInstance.createEmployee(employee).then((response)=>{
            console.log(response.data)
            navigate("/employees");

        }).catch(error=>{
            console.log(error)
        })
    }
    }
    // useEffect(() => {

    //     employeeServiceInstance.getEmployeeById(id).then((response) =>{
    //         setFirstName(response.data.firstName)
    //         setLastName(response.data.lastName)
    //         setEmailId(response.data.emailId)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }, [])
    useEffect(() => {
        if (id) {
            employeeServiceInstance.getEmployeeById(id)
                .then((response) => {
                    const { firstName, lastName, emailId } = response.data; // Destructure response data
                    setFirstName(firstName); // Update state with fetched data
                    setLastName(lastName);
                    setEmailId(emailId);
                   
                })
                .catch((error) => {
                    console.log(error);
                    
                });
        } else {
            
        }
    }, [id]);
    const title=()=>{
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }
        else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }


  return (
    <div>
        <div className='container'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
               
                {
                           title()
                       }
                <div className='card-body'>
                    <form action="">
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input type="text" placeholder='Enter First Name' name="firstName" className='form-control' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                            
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input type="text" placeholder='Enter Last Name' name="lastName" className='form-control' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                            
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email Id</label>
                            <input type="text" placeholder='Enter Email Id' name="emailId" className='form-control' value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
                            
                        </div>

                        <button className='btn btn-success' onClick={(e)=>saveOrUpdateEmployee(e)}>Submit</button>
                        <Link to="/employees"><button className='btn btn-danger' >Cancel</button></Link>
                    </form>

                </div>

            </div>

        </div>
    </div>
  )
}

export default AddEmployeeComponent