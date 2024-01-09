package com.demo.Models;

public class Students {
 private int id;
 private String name;
 private String email;
 private int contact;

public Students(int id, String name, String email, int contact) {
	super();
	this.id = id;
	this.name = name;
	this.email = email;
	this.contact = contact;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public int getContact() {
	return contact;
}
public void setContact(int contact) {
	this.contact = contact;
}
@Override
public String toString() {
	return "Students [id=" + id + ", name=" + name + ", email=" + email + ", contact=" + contact + "]";
}
 
 
}
