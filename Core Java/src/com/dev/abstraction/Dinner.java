package com.dev.abstraction;

public abstract class Dinner {
	
	public void veg()
	{
		System.out.println("Veg!!");
	}
	public abstract void non_veg();
	public Dinner()
	{
		System.out.println("Today's Dinner");
	}
	
	public static void main(String[] args)
	{
		
	}

}
