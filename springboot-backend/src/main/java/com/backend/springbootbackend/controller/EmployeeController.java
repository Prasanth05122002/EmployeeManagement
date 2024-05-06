package com.backend.springbootbackend.controller;

import com.backend.springbootbackend.exception.ResourceNotFoundException;
import com.backend.springbootbackend.model.Employee;
import com.backend.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RequestMapping("/api/v1/employees")
@RestController
public class EmployeeController {
    @Autowired
private EmployeeRepository employeeRepository;

    @GetMapping()
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return  employeeRepository.save(employee);
    }
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not Found"+id));
        return ResponseEntity.ok(employee);
    }
    @PutMapping("{id}")
    public Employee updateEmployee(@PathVariable Long id,@RequestBody Employee employee){
        Optional<Employee> optionalEmployee=employeeRepository.findById(id);
        if(optionalEmployee.isPresent()){
            Employee updatedEmployee=optionalEmployee.get();
            updatedEmployee.setFirstName(employee.getFirstName());
            updatedEmployee.setLastName(employee.getLastName());
            updatedEmployee.setEmailId(employee.getEmailId());
            return employeeRepository.save(updatedEmployee);
        }
        else{
            return null;
        }



    }
    @DeleteMapping("{id}")
    public void DeleteEmployee(@PathVariable Long id){
        Optional<Employee> employee=employeeRepository.findById(id);
        if(employee.isPresent()){
            employeeRepository.delete(employee.get());
        }
    }
}
