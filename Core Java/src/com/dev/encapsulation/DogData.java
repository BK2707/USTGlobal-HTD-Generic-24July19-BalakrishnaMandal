package com.dev.encapsulation;

public class DogData {

	public static void main(String[] args) {
		Dog d1 = new Dog();
		Dog d2 = new Dog();
		Dog d3 = new Dog();
		
		d1.setAge(1);
		d1.setBreed("Pug");
		d1.setColor("Brown");
		d1.setName("Shophie");
		
		d2.setAge(2);
		d2.setBreed("GermanShepherd");
		d2.setColor("Black");
		d2.setName("Blacky");
		
		d3.setAge(3);
		d3.setBreed("Labradog");
		d3.setColor("Brown");
		d3.setName("Tiger");
		
		Dog[] dogs = {d1,d2,d3};
		
		for (int i = 0; i < dogs.length; i++) {
			System.out.println("Age: "+dogs[i].getAge());
			System.out.println("Breed: "+dogs[i].getBreed());
			System.out.println("Colour: "+dogs[i].getColor());
			System.out.println("Name: "+dogs[i].getName());
			System.out.println("###########################");
		}

	}

}
