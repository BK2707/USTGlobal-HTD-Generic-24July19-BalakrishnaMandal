package com.dev.inheritance;

public class SuperClass {
	
	public SuperClass()
	{ 
		System.out.println("This is no-arg const of Super Class");
	}
	 	
	public SuperClass(int i)
	{
		System.out.println("This const is with int arg of Super Class");
	}
	
	public SuperClass(String str)
	{
		System.out.println("This const is with string argument of Super Class");
	}
	
	public SuperClass(String str,int i)
	{
		System.out.println("This const is with string argument and int argument of Super Class");
	}
	
	public SuperClass(int i , String str)
	{
		System.out.println("This const is with int argument and string argument of Super Class");
	}

	public static void main(String[] args) {
		

	}

}
