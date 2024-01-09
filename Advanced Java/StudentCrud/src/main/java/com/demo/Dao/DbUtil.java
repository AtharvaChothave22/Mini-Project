package com.demo.Dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbUtil {
   
	private static Connection conn;
	
	public static Connection GetMyConnection()
	{
		if(conn==null)
		{
			
			try {
				DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
				String url="jdbc:mysql://192.168.10.150:3306/dac10?useSSL=false";
				conn=DriverManager.getConnection(url, "dac10", "welcome");
			} catch (SQLException e) {
				e.printStackTrace();
			}
			
		}
		return conn;
	}
	public static void CloseMyConnection()
	{
		if(conn!=null) {
			
		try {
			conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		}
	}
}
