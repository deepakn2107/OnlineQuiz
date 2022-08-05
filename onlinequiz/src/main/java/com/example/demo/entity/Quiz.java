package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="quiz")
public class Quiz {

	@Id
	@Column(name="qid")
	private int qId;
	@Column(name="quizname")
	private String quizName;
	@Column(name="quizcatid")
	private int quizcatId;
	@Column(name="noofquestions")
	private int noOfQuestions;
	@Column(name="totalmarks")
	private int totalMarks;
	
	//private QuizCategory quizcategory;
	
	public Quiz() {
		
	}

	public Quiz(int qId, String quizName, int quizcatId, int noOfQuestions, int totalMarks) {
		super();
		this.qId = qId;
		this.quizName = quizName;
		this.quizcatId = quizcatId;
		this.noOfQuestions = noOfQuestions;
		this.totalMarks = totalMarks;
	}

	public int getqId() {
		return qId;
	}

	public void setqId(int qId) {
		this.qId = qId;
	}

	public String getQuizName() {
		return quizName;
	}

	public void setQuizName(String quizName) {
		this.quizName = quizName;
	}

	public int getQuizcatId() {
		return quizcatId;
	}

	public void setQuizcatId(int quizcatId) {
		this.quizcatId = quizcatId;
	}

	public int getNoOfQuestions() {
		return noOfQuestions;
	}

	public void setNoOfQuestions(int noOfQuestions) {
		this.noOfQuestions = noOfQuestions;
	}

	public int getTotalMarks() {
		return totalMarks;
	}

	public void setTotalMarks(int totalMarks) {
		this.totalMarks = totalMarks;
	}
	
}
