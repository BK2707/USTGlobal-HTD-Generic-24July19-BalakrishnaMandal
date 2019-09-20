package com.dev.collections;

import java.util.ArrayList;

import com.dev.encapsulation.Dog;

public class C6 {

	public static void main(String[] args) {
		ArrayList<Dog> al = new ArrayList<Dog>(2);
		
		Dog d = new Dog();
		d.setAge(10);
		d.setBreed("Doberman");
		d.setName("Shiro");
		d.setColor("Black");
		
		Dog d1 = new Dog();
		d1.setAge(5);
		d1.setBreed("German Shepherd");
		d1.setName("Blacky");
		d1.setColor("Black");
		
		Dog d2 = new Dog();
		d2.setAge(7);
		d2.setBreed("Pug");
		d2.setName("Sheru");
		d2.setColor("Brown");
		
		al.add(d);
		al.add(d1);
		al.add(d2);
		
		System.out.println(al);
		System.out.println(al.size());
		
		al.trimToSize();
		System.out.println("Size of an arraylist after trimToSize(): "+al.size());
		

	}

}
