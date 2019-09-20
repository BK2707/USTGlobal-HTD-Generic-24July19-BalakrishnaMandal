package com.dev.collections;

import java.util.HashSet;

import com.dev.encapsulation.Dog;

public class C1 {

	public static void main(String[] args) {
		HashSet <Dog> hs= new HashSet<Dog>(); //Declare HashSet object 
		Dog d = new Dog();
		d.setAge(1);
		d.setBreed("Doberman");
		d.setName("Shiro");
		d.setColor("Black");
		
		Dog d1 = new Dog();
		d1.setAge(2);
		d1.setBreed("German Shepherd");
		d1.setName("Blacky");
		d1.setColor("Black");
		
		Dog d2 = new Dog();
		d2.setAge(3);
		d2.setBreed("Pug");
		d2.setName("Sheru");
		d2.setColor("Brown");
		
		d.setAge(2);
		d1.setAge(3);
		d2.setAge(4);
		
		boolean b = hs.add(d); // HashSet add method
		boolean b1 = hs.add(d1); // HashSet add method
		boolean b3 = hs.add(d2); // HashSet add method
		System.out.println("Output of add(): "+b +" "+ b1+" "+ b3);
		System.out.println(hs);
		System.out.println("Size of HashSet hs: "+hs.size()); // HashSet size method
		System.out.println();
		
		boolean b2 = hs.remove(d); // HashSet remove method
		System.out.println("Output of remove(): "+b2);
		System.out.println(hs);
		System.out.println();
		
		System.out.println("Output of contains(): "+hs.contains(d)); // HashSet contains method
		System.out.println();
		
		System.out.println("Size of HashSet hs: "+hs.size()); // HashSet size method
		System.out.println();
		
		hs.clear();
		System.out.println("Size of HashSet hs after clear(): "+hs.size());

	}
}
