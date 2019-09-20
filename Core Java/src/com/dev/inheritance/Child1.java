package com.dev.inheritance;

public class Child1 extends Parent {
	static Child1 c1 = new Child1();
	int a = 5;
	int b = 4;
	
	/*
	 * @Override
	 */	
	//Override annotation must be given while declaring an overriden method as if cannot use that ,
	//that method will act as new method for that class
	// Overridden method only be override iff the method of child class should have of same type of parent class 
	public void add(int i , int j)
	{
		super.add();
		int a = i-j;
		System.out.println("Subtract: "+a);
	}
	
	/*
	 * @Override private void sub() { int c = a-b;
	 * System.out.println("Subtract: "+c); }
	 * 
	 * @Override static void mul() {
	 * 
	 * int c = p.a*p.b; System.out.println("mul: "+c); }
	 * 
	 * @Override final void div() { int c = a/b; System.out.println("Division: "+c);
	 * }
	 */
	//The method which have Static,Private or Final keyword as access qualifier that method can not be overridden
	
	public static void main(String args[])
	{
		c1.add(7,4);
	}

}
