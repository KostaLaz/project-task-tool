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
import java.util.Optional;

@RestController
@RequestMapping("/api/board")
@CrossOrigin("http://localhost:3000")
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

    @GetMapping("/all")
    public Iterable<ProjectTask> getAllProjectTasks(){
        return projectTaskService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable @Valid Long id){
        Optional<ProjectTask> projectTask = projectTaskService.findById(id);
        return projectTask.map(response -> ResponseEntity.ok().body(response))
                          .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        projectTaskService.delete(id);

        return new ResponseEntity<String>("Project task deleted.", HttpStatus.OK);
    }


}
