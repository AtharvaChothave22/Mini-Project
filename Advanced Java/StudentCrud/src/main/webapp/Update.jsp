<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div align="center">
    <form action="updateemp" method="post">
    Employee Id : <input type="text" name="empid" id="empid" value="${emp.id}" readonly><br><br>
    Employee name: <input type="text" name="ename" id="ename" value="${emp.name}"><br><br>
    Employee Email: <input type="text" name="sal" id="sal" value="${emp.email}"><br><br>
    Employee Contact: <input type="text" name="sal" id="sal" value="${emp.contact}"><br><br>
    <button type="submit" name="btn" id="btn">Update employee</button>
 </form>
 </div>
 
</body>
</html>