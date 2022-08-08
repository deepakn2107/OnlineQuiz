package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="quizcategory")
public class QuizCategory {
	
	@Id
	@Column(name="quizid")
	private int quizId;
	@Column(name="quizcategory")
	private String quizCategory;
	@Column(name="description")
	private String description;
	
	public QuizCategory() {
		
	}

	public QuizCategory(int quizId, String quizCategory, String description) {
		super();
		this.quizId = quizId;
		this.quizCategory = quizCategory;
		this.description = description;
	}

	public int getQuizId() {
		return quizId;
	}

	public void setQuizId(int quizId) {
		this.quizId = quizId;
	}

	public String getQuizCategory() {
		return quizCategory;
	}

	public void setQuizCategory(String quizCategory) {
		this.quizCategory = quizCategory;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
	
	
	
}
