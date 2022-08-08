package com.example.demo.reposiitory;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.Quiz;
import com.example.demo.entity.User;

@RepositoryRestResource(path="quiz")
@CrossOrigin("http://localhost:4200")
public interface QuizRepository extends JpaRepository<Quiz, Integer>{
	
	public List<Quiz> findByQuizNameContainsIgnoreCase(String name);
	Page<Quiz> findByqId(@RequestParam("id")Integer id,Pageable pageable);
	Page<Quiz> findByquizcatId(@RequestParam("id")Integer id,Pageable pageable);
}
