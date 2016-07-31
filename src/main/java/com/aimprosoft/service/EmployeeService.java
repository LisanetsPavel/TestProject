package com.aimprosoft.service;

import com.aimprosoft.entity.Employee;
import com.aimprosoft.exception.ValidationException;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by user on 08.07.16.
 */
@Service
public interface EmployeeService {

    List<Employee> getEmployeeByDep(Integer depId);

    Employee getEmployeeById(Integer id);

    void addOrUpdateEmployee(Employee employee) throws ValidationException;

    void deleteEmployee(Integer empId);
}
