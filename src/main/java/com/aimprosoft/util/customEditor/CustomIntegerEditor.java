package com.aimprosoft.util.customEditor;

import org.springframework.stereotype.Component;

import java.beans.PropertyEditorSupport;

/**
 * Created on 20.07.16.
 */
@Component
public class CustomIntegerEditor extends PropertyEditorSupport{

    @Override
    public void setAsText(String text) throws IllegalArgumentException {
        try {
            Integer integer = Integer.parseInt(text);
            setValue(integer);
        } catch (NumberFormatException e){
            setValue(null);
        }
    }
}
