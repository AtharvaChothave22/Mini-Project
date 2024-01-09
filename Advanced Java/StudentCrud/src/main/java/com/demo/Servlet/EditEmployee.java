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

@WebServlet("/editemp")
public class EditEmployee extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		IEmployeeService e2=new EmployeeServiceImpl();
		int id=Integer.parseInt(request.getParameter("eid"));
		Students s1= e2.EditEmployee(id);
		request.setAttribute("emp", s1);

         RequestDispatcher rd=request.getRequestDispatcher("Update.jsp");
         rd.forward(request, response);

}
}