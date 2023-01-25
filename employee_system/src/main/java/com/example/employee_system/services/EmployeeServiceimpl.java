package com.example.employee_system.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.example.employee_system.entity.EmployeeEntity;
import com.example.employee_system.model.Employee;
import com.example.employee_system.repository.EmployeeRepository;

@Service
public class EmployeeServiceimpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
   
    
    public EmployeeServiceimpl(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee){
        EmployeeEntity employeeEntity = new EmployeeEntity(); 

        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        
        return employee;
    }

  
    public List<Employee> getAllEmployees() {
       List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

        List<Employee> employees = employeeEntities
           .stream()
           .map(emp -> new Employee(emp.getId() , emp.getFirstName(), emp.getLastName(), emp.getEmail())) 
           .collect(Collectors.toList());       
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id){
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public Employee getEmployeeById(Long id){
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id , Employee employee){
          EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
           employeeEntity.setEmail(employee.getEmail());
           employeeEntity.setFirstName(employee.getFirstName());
           employeeEntity.setLastName(employee.getLastName());

           employeeRepository.save(employeeEntity);
           
          return employee;

    }
}


