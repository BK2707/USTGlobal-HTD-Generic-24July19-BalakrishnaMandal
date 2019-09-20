package com.dev.encapsulation;

public class StudentData {

	public static void main(String[] args) {
		Student stu = new Student();
		stu.setRegNo(3040074);
		stu.setName("Balakrishna");
		stu.setEmail("krishna@gmail.com");
		stu.setPassword("2707");
		
		System.out.println("RegNo: "+stu.getRegNo());
		System.out.println("Name: "+stu.getName());
		System.out.println("Email: "+stu.getEmail());

	}

}
