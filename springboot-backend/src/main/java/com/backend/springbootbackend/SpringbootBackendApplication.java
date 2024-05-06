package com.backend.springbootbackend;

import com.backend.springbootbackend.model.Employee;
import com.backend.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
	@Autowired
	private EmployeeRepository employeeRepository;
	@Override
	public void run(String... args) throws Exception {
//		Employee employee=new Employee();
//		employee.setFirstName("Prasanth");
//		employee.setLastName("K");
//		employee.setEmailId("test@gmail.com");
//		employeeRepository.save(employee);
//
//		Employee employee1=new Employee();
//		employee1.setFirstName("Surya");
//		employee1.setLastName("P R");
//		employee1.setEmailId("Surya@gmail.com");
//		employeeRepository.save(employee1);
	}
}
