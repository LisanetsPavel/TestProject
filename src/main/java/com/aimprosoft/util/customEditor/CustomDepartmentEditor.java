package com.aimprosoft.util.customEditor;

import com.aimprosoft.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.beans.PropertyEditorSupport;

/**
 * Created on 20.07.16.
 */
@Component
public class CustomDepartmentEditor extends PropertyEditorSupport {

    @Autowired
    private DepartmentService departmentService;

    @Override
    public void setAsText(String text) throws IllegalArgumentException {
        setValue(departmentService.getDepartmentById(Integer.parseInt(text)));
    }
}
