package com.aimprosoft.service.implement;

import com.aimprosoft.dao.DepartmentDao;
import com.aimprosoft.dao.EmployeeDao;
import com.aimprosoft.entity.Employee;
import com.aimprosoft.exception.ValidationException;
import com.aimprosoft.service.EmployeeService;
import com.aimprosoft.util.CustomValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;

/**
 * Created by user on 05.07.16.
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeDao employeeDao;
    @Autowired
    private DepartmentDao departmentDao;
    @Autowired
    private CustomValidator customValidator;

    public List<Employee> getEmployeeByDep(Integer depId) {
        return departmentDao.getById(depId).getEmployeeList();
    }

    public Employee getEmployeeById(Integer id) {
        return employeeDao.getById(id);
    }

    public void addOrUpdateEmployee(Employee employee) throws ValidationException {
        customValidator.validate(employee);
        employeeDao.saveOrUpdate(employee);
    }

    public void deleteEmployee(Integer empId) {
        employeeDao.delete(empId);
    }
}
