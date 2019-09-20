package com.dev.collections;

import java.util.TreeSet;

import com.dev.encapsulation.Dog;

public class C4 {

	public static void main(String[] args) {
		TreeSet<Dog> ts = new TreeSet<Dog>();
		
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
		
		ts.add(d);
		ts.add(d1);
		ts.add(d2);
		
		System.out.println(ts);
		
		

	}

}
