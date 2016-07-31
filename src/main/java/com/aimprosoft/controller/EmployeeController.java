package com.aimprosoft.controller;

import com.aimprosoft.entity.Department;
import com.aimprosoft.entity.Employee;
import com.aimprosoft.exception.ValidationException;
import com.aimprosoft.service.DepartmentService;
import com.aimprosoft.service.EmployeeService;
import com.aimprosoft.util.customEditor.CustomDateEditor;
import com.aimprosoft.util.customEditor.CustomIntegerEditor;
import com.aimprosoft.util.customEditor.CustomDepartmentEditor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Date;
import java.util.List;

/**
 * Created on 18.07.16.
 */

public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private DepartmentService departmentService;
    @Autowired
    private CustomDepartmentEditor customDepartmentEditor;
    @Autowired
    private CustomDateEditor customDateEditor;
    @Autowired
    private CustomIntegerEditor customIntegerEditor;


    @RequestMapping(value = "showEmpls.do/{dep_id}")
    public ModelAndView showEmpls(@PathVariable Integer dep_id) {
        List<Employee> employeeList = employeeService.getEmployeeByDep(dep_id);
        ModelAndView modelAndView = new ModelAndView("showEmpls");
        modelAndView.addObject("empls", employeeList);
        modelAndView.addObject("dep_id", dep_id);
        return modelAndView;
    }

    @RequestMapping(value = "/addEmplForm.do")
    public ModelAndView addEmplForm(@RequestParam(required = false) Integer empl_id,
                                    @RequestParam Integer dep_id) {
        ModelAndView modelAndView = new ModelAndView("addEmpl");
        if (empl_id != null) {
            Employee employee = employeeService.getEmployeeById(empl_id);
            modelAndView.addObject("emp", employee);
        }
        modelAndView.addObject("allDeps", departmentService.getAllDepartments());
        modelAndView.addObject("dep_id", dep_id);
        return modelAndView;
    }

    @RequestMapping(value = "/addEmpl.do")
    public ModelAndView addEmpl(@ModelAttribute Employee employee,
                                @RequestParam String dep_id
    ) {
        ModelAndView modelAndView = new ModelAndView();
        try {
            employeeService.addOrUpdateEmployee(employee);
            modelAndView.setViewName("redirect:/showEmpls.do/" + dep_id);
        } catch (ValidationException e) {
            modelAndView.addObject("errors", e.getErrorMap());
            modelAndView.setViewName("forward:/addEmplForm.do");
        }
        return modelAndView;
    }

    @RequestMapping(value = "/deleteEmpl.do", method = RequestMethod.POST)
    public String deleteEmpl(@RequestParam Integer empl_id) {
        Integer departmentId = employeeService.getEmployeeById(empl_id).getDepartment().getId();
        employeeService.deleteEmployee(empl_id);
        return "redirect:/showEmpls.do/" + departmentId;
    }

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        binder.registerCustomEditor(Department.class, customDepartmentEditor);
        binder.registerCustomEditor(Integer.class, customIntegerEditor);
        binder.registerCustomEditor(Date.class, customDateEditor);
    }
 }

