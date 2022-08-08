package com.example.demo.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="scorecard")
public class ScoreCard {

	@Id
	@Column(name="serialno")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer serialNo;
	@Column(name="userid")
	private Integer userId;
	@Column(name="marksscored")
	private Integer marksScored;
	@Column(name="quizid")
	private Integer quizId;
	
	@Column(name ="quizname")
	private String quizname;
	
	@Column(name="username")
	private String userName;
	
	@Column(name ="dateattempted")
	private String dateAttempted;
	
	public ScoreCard() {
		
	}

	public ScoreCard(Integer serialNo, Integer userId, Integer marksScored, Integer quizId, String quizname,
			String userName, String dateAttempted) {
		super();
		this.serialNo = serialNo;
		this.userId = userId;
		this.marksScored = marksScored;
		this.quizId = quizId;
		this.quizname = quizname;
		this.userName = userName;
		this.dateAttempted = dateAttempted;
	}

	public Integer getSerialNo() {
		return serialNo;
	}

	public void setSerialNo(Integer serialNo) {
		this.serialNo = serialNo;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getMarksScored() {
		return marksScored;
	}

	public void setMarksScored(Integer marksScored) {
		this.marksScored = marksScored;
	}

	public Integer getQuizId() {
		return quizId;
	}

	public void setQuizId(Integer quizId) {
		this.quizId = quizId;
	}

	public String getQuizname() {
		return quizname;
	}

	public void setQuizname(String quizname) {
		this.quizname = quizname;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDateAttempted() {
		return dateAttempted;
	}

	public void setDateAttempted(String dateAttempted) {
		this.dateAttempted = dateAttempted;
	}

	

}
