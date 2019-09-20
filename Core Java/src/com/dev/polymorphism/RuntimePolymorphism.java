package com.dev.polymorphism;

public class RuntimePolymorphism {
	static RuntimePolymorphism rp = new RuntimePolymorphism();
	
	public void details(){
		String name  = "Balakrishna";
		int age = 21;
		System.out.println("Name: "+name + " Age: "+age);
		System.out.println();
	}
	
	public void items(int i,int j)
	{
		System.out.println("Item 1: "+i);
		System.out.println("Item 2: "+j);
		System.out.println();
	}
	
	public void items(int i,int j,int k) // method overloaded(items)
	{
		System.out.println("Item 1: "+i);
		System.out.println("Item 2: "+j);
		System.out.println("Item 3: "+k);
	}
	public static void main(String[] args) {
		rp.details();
		rp.items(10, 20);
		rp.items(5, 10, 15);
	}

}
