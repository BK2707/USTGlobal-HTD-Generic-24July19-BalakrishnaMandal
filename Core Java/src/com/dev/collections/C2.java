package com.dev.collections;

import java.util.HashSet;
import java.util.TreeSet;

public class C2 {

	public static void main(String[] args) {
		
		HashSet<Employee> ep = new HashSet<Employee>(); // HashSet Object
		
		Employee e1 = new Employee();
		e1.setName("Balakrishna Mandal");
		e1.setId(101);
		e1.setEmail("bala@gmail.com");
		e1.setPassword(2707);
		
		Employee e2 = new Employee();
		e2.setName("Abhinash Chaudhary");
		e2.setId(102);
		e2.setEmail("abhin@gmail.com");
		e2.setPassword(2987);
		
		Employee e3 = new Employee();
		e3.setName("Raj Mathur");
		e3.setId(103);
		e3.setEmail("raj@gmail.com");
		e3.setPassword(2575);
		
		boolean b1 = ep.add(e1); //Adding elements to the set
		boolean b2 = ep.add(e2);
		boolean b3 = ep.add(e3);
		System.out.println("Add(): "+b1+" "+b2+" "+b2);
		System.out.println(ep); //Printing the set
		System.out.println();
		
		System.out.println("After updating the Email Address:");
		e1.setEmail("krishna@gmail.com"); // Updating the email
		e2.setEmail("abhinash@gmail.com");
		e3.setEmail("rajmathur@gmail.com");
		System.out.println(ep);
		System.out.println();
		
		
		System.out.println("Size(): "+ep.size()); //Size of the Set
		System.out.println();
		
		boolean b4 = ep.remove(e1); //Removing an object elements from the set
		System.out.println("Remove(): "+b4);
		System.out.println(ep);
		System.out.println("Size() after remove e1: "+ep.size());
		System.out.println();
		
		ep.clear(); //Removing all the elements from the set
		System.out.println("Size after clearing the set elements: "+ep.size());
		}

}
