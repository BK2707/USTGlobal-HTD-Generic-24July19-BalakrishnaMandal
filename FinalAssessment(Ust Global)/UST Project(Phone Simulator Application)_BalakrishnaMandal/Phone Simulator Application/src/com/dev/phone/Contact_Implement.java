package com.dev.phone;

import java.util.HashMap;
import java.util.Scanner;


public class Contact_Implement implements Contact_Manipulation {
	static Scanner sc = new Scanner(System.in);
	Contact c = new Contact();
	
	HashMap<String, Contact > hm = new HashMap<String, Contact>();
	
		

	@Override
	public void showAllContacts() {
		System.out.println(hm);
		
	}

	@Override
	public void searchContacts(String name) {
		Contact c = hm.get(name);
		if(c==null) {
			System.out.println("No contact Found");
		}
		else
		{
			System.out.println("Press 1 to call");
			System.out.println("Press 2 to message");
			System.out.println("Press 3 to go back to main menu");
			int n = sc.nextInt();
			if(n==1) {
				call();
			}
			else if (n==2) {
				message();
			}
			
		}
		
	}

	@Override
	public void operate() {
		System.out.println("Press 1 to add contact");
		System.out.println("Press 2 to delete contact");
		System.out.println("Press 3 to edit contact");
		int n = sc.nextInt();
		if (n==1) {
			System.out.println("Enter the name: ");
			String name = sc.nextLine();
			add(name, c);
		}
		else if (n==2) {
			System.out.println("Enter the key in which contact is saved");
			String d = sc.nextLine();
			delete(d);
		}
		else if(n==3) {
			System.out.println("Enter the key of which contact want to edit");
			String e = sc.nextLine();
			edit(e);			
		}
		
	}

	@Override
	public void add(String name ,Contact c) {
		System.out.println("Enter the name: ");
		String n = sc.nextLine();
		c.setName(n);
		
		System.out.println("Enter the number: ");
		long num = sc.nextInt();
		c.setNumber(num);
		
		System.out.println("Enter the Group: ");
		String g = sc.nextLine();
		c.setGroup(g);
		
		hm.put(c.getName(), c);
		
	}
	
	public static void call() {
		System.out.println("Calling to contact");
		System.out.println("Press End to end the call");
		String s = sc.nextLine();
		if(s=="End") {
			System.out.println("Call Ended");
		}
		
	}
	public static void message() {
		
		System.out.println("Enter the message: ");
		String msg = sc.nextLine();
		System.out.println("Sending the Message");
		
	
	}
	
	public void delete(String key) {
		hm.remove(key);
	}
	
	public void edit(String key) {
		long number = sc.nextInt();
		c.setNumber(number);
		//Contact c = hm.replace(key, c);
	}
	
	

}
