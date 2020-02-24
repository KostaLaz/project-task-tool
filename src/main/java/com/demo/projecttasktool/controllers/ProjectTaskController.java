package com.demo.projecttasktool.controllers;

import com.demo.projecttasktool.domain.ProjectTask;
import com.demo.projecttasktool.service.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/board")
@CrossOrigin("")
public class ProjectTaskController {

    @Autowired
    ProjectTaskService projectTaskService;

    @PostMapping("")
    public ResponseEntity<?> addProjectTaskToBoard(@Valid  @RequestBody ProjectTask projectTask){
        ProjectTask newPT = projectTaskService.saveOrUpdateProjectTask(projectTask);
        return new  ResponseEntity<ProjectTask>(newPT, HttpStatus.CREATED);

    }
}
