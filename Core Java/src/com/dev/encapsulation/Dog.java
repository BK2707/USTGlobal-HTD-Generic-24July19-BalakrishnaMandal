package com.dev.encapsulation;

public class Dog implements Comparable<Dog> // implements comparable class interface
{
	
	private int age;
	private String breed;
	@Override
	public String toString() {
		return "Dog [age=" + age + ", breed=" + breed + ", color=" + color + ", name=" + name + "]";
	}
	private String color;
	private String name;
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getBreed() {
		return breed;
	}
	public void setBreed(String breed) {
		this.breed = breed;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public int compareTo(Dog d) //overrides compareTo method to get in asc order.
	{
		return (this.age - d.age);
	}
	
	
	

}
