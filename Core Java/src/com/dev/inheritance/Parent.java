package com.dev.inheritance;

public class Parent {
	static Parent p = new Parent();
	int a = 8;
	int b = 2;
	
	public  void add()
	{

		int c = a+b;
		System.out.println("Sum: "+c);
	}
	
	private void sub()
	{
		int c = a-b;
		System.out.println("Subtract: "+c);
	}
	
	static  void mul()
	{

		int c = p.a*p.b;
		System.out.println("Multiplication: "+c);
	}
	
	final void div() 
	{
		int c = a/b;
		System.out.println("Division: "+c);
	}
	public static void main(String[] args) {
		
		p.add();
	

	}

}
