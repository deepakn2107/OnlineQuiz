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
	
	public QuizCategory() {
		
	}

	public QuizCategory(int quizId, String quizCategory) {
		super();
		this.quizId = quizId;
		this.quizCategory = quizCategory;
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
	
	
}
