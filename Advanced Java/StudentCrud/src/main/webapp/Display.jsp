<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<table border="2">
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Contact</th>
<th>Edit Details</th>
<th>Delete Details</th>
</tr>
<c:forEach var="emp" items="${list}">
<tr>
<td>${emp.id}</td>
<td>${emp.name}</td>
<td>${emp.email}</td>
<td>${emp.contact}</td>
<td><a href="editemp?eid=${emp.id}">edit</a></td>
<td><a href="#">Delete</a>
</tr>
</c:forEach>
</table><br>
<a href="Insert.jsp">Add new Employee</a>

</body>
</html>