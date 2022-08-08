package com.example.demo.reposiitory;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.Question;


@RepositoryRestResource(path="question")
@CrossOrigin("http://localhost:4200")
public interface QuestionRepository extends JpaRepository<Question,Integer>{

	Page<Question> findByqId(@RequestParam("id")Integer id,Pageable pageable);
	
	
}
