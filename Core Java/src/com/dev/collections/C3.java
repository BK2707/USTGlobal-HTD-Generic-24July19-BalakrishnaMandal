package com.dev.collections;

import java.util.HashMap;

import com.dev.encapsulation.Dog;

public class C3 {

	public static void main(String[] args) {
		HashMap<String, Dog> hm = new HashMap<String, Dog>(); //HashMap Object
		
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
		
		hm.put("1", d); //adding object to the map
		hm.put("2", d1);
		hm.put("3", d2);
		System.out.println(hm);
		System.out.println();
		
		/*
		 * Dog b = hm.put("1", d); //returning put method in value object
		 * System.out.println(b); Dog b1 = hm.put("2", d1); System.out.println(b1); Dog
		 * b2 = hm.put("3", d2); System.out.println(b2);
		 */
		
		Dog f = hm.remove("2"); //Removing an element from map
		System.out.println(f);
		System.out.println(hm);
		System.out.println();
		
		System.out.println("Output of containsKey(): "+hm.containsKey("2")); //checks a key is present in the map
		System.out.println();
		
		System.out.println("Output of containsValue(): "+hm.containsValue(d)); //checks a Value is present in the map
		

	}

}
