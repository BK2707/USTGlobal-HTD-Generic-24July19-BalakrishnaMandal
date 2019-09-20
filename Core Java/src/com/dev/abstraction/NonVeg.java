package com.dev.abstraction;

public abstract class NonVeg extends Dinner{
	
	public static void seafood()
	{
		System.out.println("Seafood!!");
	}
	public abstract void meat();
	
	@Override
	public void non_veg()
	{
		System.out.println("Non Veg!!");
	}
	
	public static void main(String[] args) {
		seafood();

	}

}
