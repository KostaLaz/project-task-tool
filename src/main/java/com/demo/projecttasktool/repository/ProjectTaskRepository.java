package com.demo.projecttasktool.repository;

import com.demo.projecttasktool.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {

    @Override
    Optional<ProjectTask> findById(Long aLong);
}
