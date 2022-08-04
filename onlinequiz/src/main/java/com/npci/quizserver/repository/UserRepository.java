package com.npci.quizserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.npci.quizserver.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	
	public User findByUsername(String username);
}
