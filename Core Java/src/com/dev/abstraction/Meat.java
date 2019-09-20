package com.dev.abstraction;

public class Meat extends NonVeg{
	

	public static void main(String[] args) {
		Meat me = new Meat();
		me.meat();
	}

	@Override
	public void meat() {
		System.out.println("Meat!!");
		
	}


}
