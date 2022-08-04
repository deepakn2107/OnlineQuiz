package com.npci.quizserver.service;

import java.util.Set;

import com.npci.quizserver.entity.User;
import com.npci.quizserver.entity.UserRole;

public interface UserService {
	
	//creating user
	
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	//get user by username
	
	public User getUser(String username);
	
	//delete user
	public void deleteUser(Long userid);
	
}
