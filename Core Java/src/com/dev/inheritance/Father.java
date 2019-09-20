package com.dev.inheritance;

public class Father extends GrandFather {
	
	static Father f = new Father();
	String name = "Eddard";
	@Override
	public void printName() {
		System.out.println(name+" "+super.name+" "+f.lastName);//super keyword is use to refers to object of immediate parent or super class
		super.printName();
	}

	public static void main(String[] args) {
		f.printName(); 
		
	}

}
