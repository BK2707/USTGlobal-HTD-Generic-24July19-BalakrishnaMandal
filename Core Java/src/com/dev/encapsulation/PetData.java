package com.dev.encapsulation;

public class PetData {

	public static void main(String[] args) {
		Pet p1 = new Pet();
		Pet p2 = new Pet();
		Pet p3 = new Pet();
		Pet p4 = new Pet();
		
		p1.setPettype("Dog");
		p1.setName("Blackie");
		p1.setAge(2);
		p1.setColor("Black");
		
		p2.setPettype("Cat");
		p2.setName("Blownie");
		p2.setAge(5);
		p2.setColor("Brown");
		
		p3.setPettype("Parrot");
		p3.setName("Chacie");
		p3.setAge(2);
		p3.setColor("Green");
		
		p4.setPettype("Ginne Pig");
		p4.setName("Roomie");
		p4.setAge(3);
		p4.setColor("White");
		
		Pet[] pets = {p1,p2,p3,p4};
		for (int i = 0; i < pets.length; i++) {
			System.out.println("################################");
			System.out.println("Pet Type: "+pets[i].getPettype());
			System.out.println("Name: "+pets[i].getName());
			System.out.println("Age: "+pets[i].getAge());
			System.out.println("Colour: "+pets[i].getColor());
			System.out.println("################################");
			
		}
		
		

	}

}
