package com.dev.collections;

public class Employee implements Comparable<Employee> {
	private String name;
	private int id;
	private String email;
	private int password;
	
	@Override
	public String toString() {
		return "Employee [name=" + name + ", id=" + id + ", email=" + email + "]";
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	/*
	 * public int getPassword() { return password; }
	 */
	public void setPassword(int password) {
		this.password = password;
	}

	@Override
	public int compareTo(Employee e) {
		return (this.id - e.id);
	}

}
