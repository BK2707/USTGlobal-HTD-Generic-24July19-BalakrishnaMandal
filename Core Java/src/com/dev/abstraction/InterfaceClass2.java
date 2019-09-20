package com.dev.abstraction;

public interface InterfaceClass2 extends InterfaceClass {
	void show();
	
	int i = 10; //the interface class data members can be public,static or final 
	static int j = 20;
	public int k = 30;
	static void print() {
		System.out.println("Krishna");
	}
	public static void main(String[] args) {
		System.out.println(i); // By default variables are static
	}

}
