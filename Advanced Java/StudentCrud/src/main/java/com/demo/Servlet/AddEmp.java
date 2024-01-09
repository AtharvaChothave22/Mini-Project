package com.demo.Servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.demo.Service.EmployeeServiceImpl;
import com.demo.Service.IEmployeeService;
import com.demo.Models.*;
@WebServlet("/Insert")
public class AddEmp extends HttpServlet {

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	  int id=Integer.parseInt(request.getParameter("id"));
	  String name=request.getParameter("name");
	  String email=request.getParameter("email");
	  int contact=Integer.parseInt(request.getParameter("contact"));
      Students s1=new Students(id,name,email,contact);
      IEmployeeService e2=new EmployeeServiceImpl();
      e2.InsertEmp(s1);
      RequestDispatcher rd=request.getRequestDispatcher("DisplayEmp");
	  rd.forward(request, response);
	}

}
