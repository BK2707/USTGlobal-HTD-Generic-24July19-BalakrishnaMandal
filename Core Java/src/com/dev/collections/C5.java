package com.dev.collections;

import java.util.TreeSet;

public class C5 {

	public static void main(String[] args) {
		TreeSet<Employee> ts = new TreeSet<Employee>();
		
		Employee e1 = new Employee();
		e1.setName("Balakrishna Mandal");
		e1.setId(102);
		e1.setEmail("bala@gmail.com");
		e1.setPassword(2707);
		
		Employee e2 = new Employee();
		e2.setName("Abhinash Chaudhary");
		e2.setId(103);
		e2.setEmail("abhin@gmail.com");
		e2.setPassword(2987);
		
		Employee e3 = new Employee();
		e3.setName("Raj Mathur");
		e3.setId(101);
		e3.setEmail("raj@gmail.com");
		e3.setPassword(2575);
		
		ts.add(e1);
		ts.add(e2);
		ts.add(e3);
		
		System.out.println(ts);
	}

}
