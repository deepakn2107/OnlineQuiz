package com.npci.quizserver.Impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npci.quizserver.entity.User;
import com.npci.quizserver.entity.UserRole;
import com.npci.quizserver.repository.RoleRepository;
import com.npci.quizserver.repository.UserRepository;
import com.npci.quizserver.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	//creating user if exist throws error
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		User local = this.userRepository.findByUsername(user.getUsername());
		if(local !=null) {
			System.out.println("User is already there !!");
			throw new Exception("User already present !!");
		}else {
			for(UserRole ur: userRoles) {
				roleRepository.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local =this.userRepository.save(user);
			
		}
				
			return local;
	}

	//get user by username
	@Override
	public User getUser(String username) {
		
		return this.userRepository.findByUsername(username);
	}

	@Override
	public void deleteUser(Long userid) {
		this.userRepository.deleteById(userid);
		
	}

}
