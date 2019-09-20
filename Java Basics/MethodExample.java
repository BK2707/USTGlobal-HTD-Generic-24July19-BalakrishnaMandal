public class MethodExample 
{
	public static int calcArea(int side)
	{
		int area = side * side;
		return area;
	}
	public static double circleArea(int radius)
	{
		double area = 3.14 * radius * radius;
		return area;
	}
	public static double triangleArea(int height, int base)
	{
		double area = 0.5 * base * height;
		return area;
	}
	public static double avgNum(int a,int b,int c)
	{
		double average = (a+b+c)/3;
		return average;
	}
	public static void main(String[] args) 
	{
		int a = calcArea(5);
		double circle = circleArea(10);
		double triangle = triangleArea(12,9);
		double avg = avgNum(5,6,9);
		System.out.println("Area of a square: "+a);
		System.out.println("Area of a circle: "+circle);
		System.out.println("Area of a triangle: "+triangle);
		System.out.println("Average of three numbers: "+avg);
	}
}
