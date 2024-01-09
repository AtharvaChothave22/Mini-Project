package com.demo.Service;

import java.util.List;
import com.demo.Dao.*;
import com.demo.Models.Students;

public class EmployeeServiceImpl implements IEmployeeService {
   IDaoEmp e1=new EmpDaoImp();
   
	public EmployeeServiceImpl()
	{
		
	}

	@Override
	public List<Students> DisplayEmployee() {
	
		return e1.DisplayEmp() ;
	}

	@Override
	public void InsertEmp(Students s1) {
		System.out.println(s1);
		e1.InsertEmployee(s1);
		//System.out.println(s1);
		
	}

	@Override
	public Students EditEmployee(int id) {
		return e1.UpdateEmp(id);
	}
}
