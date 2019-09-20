package com.dev.polymorphism;

public class RuntimeChild extends RuntimePolymorphism {
	
	static RuntimeChild rc = new RuntimeChild();
	
	@Override
	public void details() // method overridden from RuntimePolymorphism class
	{
		String name  = "Abhinash";
		int age = 21;
		System.out.println("Name: "+name + " Age: "+age);
	}
	
	public void details(long phNo) // method overloaded
	{	
		String name  = "Abhinash";
		int age = 21;
		System.out.println("Name: "+name + " Age: "+age+ " Phone no: "+phNo);		
	}

	public static void main(String[] args) {
		rc.details();
		rc.details(978964551);

	}

}
