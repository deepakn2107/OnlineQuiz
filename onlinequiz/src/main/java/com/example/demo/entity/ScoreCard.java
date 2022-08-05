package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="scorecard")
public class ScoreCard {

	@Id
	@Column(name="serialno")
	private int serialNo;
	@Column(name="userid")
	private int userId;
	@Column(name="marksscored")
	private int marksScored;
	@Column(name="quizid")
	private int quizId;
	
	public ScoreCard() {
		
	}

	public ScoreCard(int serialNo, int userId, int marksScored, int quizId) {
		super();
		this.serialNo = serialNo;
		this.userId = userId;
		this.marksScored = marksScored;
		this.quizId = quizId;
	}

	public int getSerialNo() {
		return serialNo;
	}

	public void setSerialNo(int serialNo) {
		this.serialNo = serialNo;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getMarksScored() {
		return marksScored;
	}

	public void setMarksScored(int marksScored) {
		this.marksScored = marksScored;
	}

	public int getQuizId() {
		return quizId;
	}

	public void setQuizId(int quizId) {
		this.quizId = quizId;
	}
	

}
