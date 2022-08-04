package com.npci.quizserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.npci.quizserver.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
