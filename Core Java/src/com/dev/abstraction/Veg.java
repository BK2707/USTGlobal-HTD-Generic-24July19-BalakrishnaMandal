package com.dev.abstraction;

public class Veg extends Dinner{
	
	@Override
	public void veg()
	{
		System.out.println("Veg");
	}
	
	@Override
	public void non_veg() {
		System.out.println("Non Veg");
	}
	

	public static void main(String[] args) {
		
		Veg v = new Veg();
		v.veg();

	}


	

}
