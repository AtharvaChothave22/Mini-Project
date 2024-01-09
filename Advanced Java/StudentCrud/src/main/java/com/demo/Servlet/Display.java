package com.demo.Servlet;

import java.io.IOException;
import java.util.List;

import com.demo.Service.*;
import com.demo.Models.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/DisplayEmp")
public class Display extends HttpServlet {
	
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		IEmployeeService e1=new EmployeeServiceImpl();
		List<Students> elist=e1.DisplayEmployee();
		request.setAttribute("list", elist);
		RequestDispatcher rd=request.getRequestDispatcher("Display.jsp");
		rd.forward(request, response);

		
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		doGet(request,response);
	}
}
