package com.dev.objectmethods;

public class ObjectMethods {

	public static void main(String[] args) {
		
		Dog d1 = new Dog();
		Dog d2 = new Dog();
		
		System.out.println(d1.getClass()); // get the class of the object(fully qualified name of the object)
		System.out.println(d2.getClass());

		boolean a = d1.equals(d2); // it comparing two objects(it checks the memory location of an object)
		System.out.println(a);	   // in order to compare the values of the objects we need to override the hashCode method 
	}

}
