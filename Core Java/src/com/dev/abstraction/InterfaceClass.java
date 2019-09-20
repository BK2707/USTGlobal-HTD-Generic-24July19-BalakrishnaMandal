package com.dev.abstraction;

@FunctionalInterface
public interface InterfaceClass {
	//InterfaceClass ic = new InterfaceClass(); // in interface we can not instantiate
	void display();
	//void show();//If an interface is a functional interface we can able to make only one abstract method
	 static void print() {
		 System.out.println("Bala");
	}

}
