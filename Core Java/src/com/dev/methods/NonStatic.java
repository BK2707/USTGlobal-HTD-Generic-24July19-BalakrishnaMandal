package com.dev.methods;

public class NonStatic {

	public static void main(String[] args) {
		MethodExample me = new MethodExample();
		int rectArea = me.rectangleArea(5, 6);
		System.out.println("Rectangle Area: "+rectArea);

	}

}
