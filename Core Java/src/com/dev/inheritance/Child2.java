package com.dev.inheritance;

public class Child2 extends Child1{
	static Child2 c2 = new Child2();
	
	public void add() {
		super.add();
	}

	public static void main(String[] args) {
		
		c2.add();
	}

}
