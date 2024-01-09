package com.demo.Service;

import java.util.List;

import com.demo.Models.Students;

public interface IEmployeeService {

	List<Students> DisplayEmployee();

	void InsertEmp(Students s1);

	Students EditEmployee(int id);

}
