package com.aimprosoft.controller;

import com.aimprosoft.entity.Department;
import com.aimprosoft.exception.ValidationException;
import com.aimprosoft.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * Created on 18.07.16.
 */
@Controller
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @RequestMapping("/")
    public String defaultHandler() {

        System.out.println("!!!!!!!!!!!!!!!!!!!!!!");
        return "index";
    }

    @RequestMapping(value = "/getAllDeps")
    public @ResponseBody List<Department> allDeps(){
         return departmentService.getAllDepartments();
    }

    @RequestMapping(value = "/addDep", method = RequestMethod.POST)
    public @ResponseBody List<Department> addDep(@RequestBody Department department){
        departmentService.addOrUpdateDepartment(department);
        System.out.println(department.getName());
        return departmentService.getAllDepartments();
    }

    @RequestMapping(value = "/deleteDep", method = RequestMethod.POST)
    public void deleteDep(Integer i){
        System.out.println(i);
    }





}
