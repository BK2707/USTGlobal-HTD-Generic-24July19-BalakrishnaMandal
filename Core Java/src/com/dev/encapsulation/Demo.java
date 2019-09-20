package com.dev.encapsulation;

public class Demo {
	final static int INT = 10; //final variables should named in block letter
	final static void print()
	{
		System.out.println("Print method in Demo class");
	}
	public static void main(String[] args) {
		
		System.out.println(INT);
		//i = 12; // we cannot reinitialize the final variable
	  

	}

}
