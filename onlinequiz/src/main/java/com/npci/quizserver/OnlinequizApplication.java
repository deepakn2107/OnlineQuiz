package com.npci.quizserver;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.npci.quizserver.entity.Role;
import com.npci.quizserver.entity.User;
import com.npci.quizserver.entity.UserRole;
import com.npci.quizserver.service.UserService;

@SpringBootApplication
public class OnlinequizApplication  implements CommandLineRunner{

	@Autowired
	private UserService userService;
	
	public static void main(String[] args) {
		SpringApplication.run(OnlinequizApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Starting code");
		
//		  User user=new User();
//		  user.setfirstname("Deepak");
//		  user.setlastname("Narayanasamy");
//		  user.setUsername("deepakn2107");
//		  user.setPassword("abc");
//		  user.setEmail("deepakng2199@gmail.com");
//		  user.setProfile("default.png");
//		  
//		  Role role1 = new Role();
//		  role1.setRoleid(44L);
//		  role1.setRolename("Admin");
//		  
//		  Set<UserRole> userRoleSet = new HashSet<>();
//		 UserRole userRole = new UserRole();
//		 userRole.setRole(role1); 
//		 userRole.setUser(user);
//		 userRoleSet.add(userRole);
//		 
//		User user1 = this.userService.createUser(user, userRoleSet);
//		System.out.println(user1.getUsername());
//	
//	
	}

}
