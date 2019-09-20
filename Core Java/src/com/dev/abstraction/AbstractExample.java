package com.dev.abstraction;

public abstract class AbstractExample {
	
	public AbstractExample() //constructor of Abstract class
	{
		System.out.println("This is the constructor of abstract class");
	}
	abstract void display(); //abstract method
	public void show() //concrete method
	{
		System.out.println("Concrete Method of Abstract Class");
	}
	public static void main(String[] args) {
		

	}

}
