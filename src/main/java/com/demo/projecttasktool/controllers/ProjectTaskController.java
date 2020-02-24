package com.demo.projecttasktool.controllers;

import com.demo.projecttasktool.service.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/board")
@CrossOrigin("")
public class ProjectTaskController {

    @Autowired
    ProjectTaskService projectTaskService;
}
