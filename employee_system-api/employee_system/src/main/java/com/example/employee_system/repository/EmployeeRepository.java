package com.example.employee_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employee_system.entity.EmployeeEntity;

import aj.org.objectweb.asm.Type;


@Repository
public interface EmployeeRepository  extends JpaRepository<EmployeeEntity, Long>{
    
}
