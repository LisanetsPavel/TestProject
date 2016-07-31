package com.aimprosoft.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created on 21.07.16.
 */
@ControllerAdvice
public class ExceptionController {
    private static final Logger logger = LogManager.getLogger(ExceptionController.class);

    @ExceptionHandler(Throwable.class)
    public ModelAndView handleAllException(Exception e) {
        logger.error(e);
        ModelAndView modelAttribute = new ModelAndView("errorPage");
        modelAttribute.addObject("errMsg", e.getMessage());
        return modelAttribute;
    }
}
