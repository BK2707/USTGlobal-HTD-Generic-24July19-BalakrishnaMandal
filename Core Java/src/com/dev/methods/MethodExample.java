package com.dev.methods;

public class MethodExample {
	public static int j=0;
	static MethodExample me = new MethodExample();
	public static void main(String[] args) {
		 
		int area = calcArea(6);
		System.out.println("Area of a Square: "+area);
		int rect = me.rectangleArea(4,8);
		System.out.println("Area of a rectangle: "+rect);

	}
	public static int calcArea(int side){
		int j = side * side;
		double a = me.triangleArea(4,8);
		System.out.println(a);
		return j;
	}
	public static double triangleArea (int height, int base) {
		double j = 0.5 * base * height;
		return j;
	}
	public int rectangleArea (int length, int breadth) {
		int area = length* breadth;
		return area;
	}
	public static double circleArea (int radius) {
		double area = 3.14 * radius * radius;
		return area;
	}

}
