package com.demo.Dao;

import java.util.List;

import com.demo.Models.Students;

public interface IDaoEmp {

	List<Students> DisplayEmp();

	void InsertEmployee(Students s1);

	Students UpdateEmp(int id);

}
