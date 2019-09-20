package com.dev.methods;

public class MethodOverloading {
	static MethodOverloading me = new MethodOverloading();
	
	public void print()
	{
		System.out.println("This is print method with no-argument");
	}
	public int print(int i)
	{
		System.out.println("This is print method with int-argument");
		return 1;
	}
	static String print(String str)
	{
		System.out.println("This is print method with String-argument");
		return "a";
	}
	public static void main(String[] args) {
		me.print();
		me.print(1);
		me.print("bala");

	}

}
