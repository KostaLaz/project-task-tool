package com.demo.projecttasktool.service;

import com.demo.projecttasktool.domain.ProjectTask;
import com.demo.projecttasktool.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProjectTaskService {

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    public ProjectTask saveOrUpdateProjectTask(ProjectTask projectTask){

        if(projectTask.getStatus() == null || projectTask.getStatus() == ""){
            projectTask.setStatus("TO_DO");
        }

        return projectTaskRepository.save(projectTask);
    }

    public Iterable<ProjectTask> findAll(){
        return projectTaskRepository.findAll();
    }


    public Optional<ProjectTask> findById(Long id){
         Optional<ProjectTask> projectTask = projectTaskRepository.findById(id);
        return projectTask;

    }
}
