package com.dev.encapsulation;

public  final class Test extends Demo // a final class can inherit other class but a class can not inherit final class  
	{	
	/*
	 * static void print() { System.out.println("Print method in Test class"); }
	 */
    //	Final method cannot be override
	
	public static void main(String[] args) {
		Demo.print();
	}
	
	
	

}
