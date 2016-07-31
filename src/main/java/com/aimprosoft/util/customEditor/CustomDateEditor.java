package com.aimprosoft.util.customEditor;

import org.springframework.stereotype.Component;

import java.beans.PropertyEditorSupport;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created on 20.07.16.
 */
@Component
public class CustomDateEditor extends PropertyEditorSupport {

    private SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

    @Override
    public void setAsText(String text) throws IllegalArgumentException {
        try {
            Date date = formatter.parse(text);
            setValue(date);
        } catch (ParseException e) {
            setValue(null);
        }
    }
}
