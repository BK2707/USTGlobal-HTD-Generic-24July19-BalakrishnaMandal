package com.dev.inheritance;

public class Subclass extends SuperClass {
	public Subclass()
	{
		super();
		System.out.println();
	}
	public Subclass(int i)
	{
		super(1);
		System.out.println();
		System.out.println("-->const with int arg");
		System.out.println();
	}
	public Subclass(String str)
	{
		super(1);
		System.out.println();
		System.out.println("-->Const with string arg");
		System.out.println();
	}
	public Subclass(int i,String str)
	{
		super("A");
		System.out.println();
		System.out.println("-->Const wit int and string arg");
	}
	public static void main(String[] args) {
		Subclass sub = new Subclass();
		Subclass sub2 = new Subclass(1);
		Subclass sub3 = new Subclass("A");
		Subclass sub4 = new Subclass(1,"B");
	}

}
