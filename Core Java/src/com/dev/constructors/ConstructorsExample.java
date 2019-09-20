package com.dev.constructors;

public class ConstructorsExample {
	
	public ConstructorsExample() //NO ARGUMENT CONSTRUCTOR
	{
		System.out.println("This is no-arg const");
	}
	
	public ConstructorsExample(int i) //CONSTRUCTOR WITH ONE INT ARGUMENT(constructor overloaded with int argument)
	{
		System.out.println("This const is with int arg");
	}
	
	public ConstructorsExample(String str) //CONSTRUCTOR WITH ONE STRING ARGUMENT
	{
		System.out.println("This const is with string argument");
	}
	
	public ConstructorsExample(String str,int i) //CONSTRUCTOR WITH TWO ARGUMENTS(int and string)
	{
		System.out.println("This const is with string argument and int argument");
	}
	
	public ConstructorsExample(int i , String str) //CONSTRUCTOR WITH TWO ARGUMENTS(string and int) 
	{
		System.out.println("This const is with int argument and string argument");
	}
	
	public static void main(String args[]) {
		ConstructorsExample ce = new ConstructorsExample();
		System.out.println("-->"+ce);
		System.out.println("****************************************************");
		ConstructorsExample ce1 = new ConstructorsExample(1);
		System.out.println("-->"+ce1);
		System.out.println("****************************************************");
		ConstructorsExample ce2 = new ConstructorsExample("string");
		System.out.println("-->"+ce2);
		System.out.println("****************************************************");
		ConstructorsExample ce3 = new ConstructorsExample(1,"String");
		System.out.println("-->"+ce3);
		System.out.println("****************************************************");
		ConstructorsExample ce4 = new ConstructorsExample ("string",1);
		System.out.println("-->"+ce4);
	}

}
