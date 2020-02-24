package com.demo.projecttasktool.controllers;

import com.demo.projecttasktool.domain.ProjectTask;
import com.demo.projecttasktool.service.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/board")
@CrossOrigin("")
public class ProjectTaskController {

    @Autowired
    ProjectTaskService projectTaskService;

    @PostMapping("")
    public ResponseEntity<?> addProjectTaskToBoard(@Valid  @RequestBody ProjectTask projectTask, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            Map<String, String> erorMap = new HashMap<>();
            for(FieldError eror: bindingResult.getFieldErrors()){
                erorMap.put(eror.getField(), eror.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(erorMap, HttpStatus.BAD_REQUEST);
        }
        ProjectTask newPT = projectTaskService.saveOrUpdateProjectTask(projectTask);
        return new  ResponseEntity<ProjectTask>(newPT, HttpStatus.CREATED);

    }
}
