package com.dev.methods;
import java.util.*;

public class MathmaticalOperations {
	
	static MathmaticalOperations mo = new MathmaticalOperations();
	
	public void add(int a,int b)
	{
		int sum = a + b;
		System.out.println("Addition: "+sum);
	}
	public void add(int a,int b,int c)
	{
		int sum = a + b + c;
		System.out.println("Addition: "+sum);
	}
	public void add(int a,int b,int c,int d)
	{
		int sum = a + b + c + d;
		System.out.println("Addition: "+sum);
	}
	public void mul(int a ,int b)
	{
		int mul = a * b;
		System.out.println("Multiplication: "+mul);
	}
	public void mul(int a,int b,int c)
	{
		int mul = a * b * c;
		System.out.println("Multiplication: "+mul);
	}
	public void mul(int a,int b,int c,int d)
	{
		int mul = a * b * c * d;
		System.out.println("Multiplication: "+mul);
	}
	public void div(int a,int b)
	{
		double div = a / b;
		System.out.println("Division: "+div);
	}
	public void div(int a,int b,int c)
	{
		int div = a / b / c;
		System.out.println("Division: "+div);
	}
	public void div(int a,int b,int c,int d)
	{
		int div = a / b / c / d;
		System.out.println("Division: "+div);
	}
	public void sub(int a , int b)
	{
		int sub = a - b;
		System.out.println("Subtraction: "+sub);
	}
	public void sub(int a , int b , int c)
	{
		int sub = a - b - c;
		System.out.println("Subtraction: "+sub);
	}
	public void sub(int a , int b , int c , int d)
	{
		int sub = a - b - c - d;
		System.out.println("Subtraction: "+sub);
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your choice: ");
		System.out.println("1.ADDITION");
		System.out.println("2.SUBTRACTION");
		System.out.println("3.MULTIPLICATION");
		System.out.println("4.DIVISION");
		System.out.println();
		int operation = sc.nextInt();
		switch(operation)
		{
		case 1:
		{
			System.out.print("Enter the number of arguments: ");
			int n = sc.nextInt();
			if (n==2)
			{
				mo.add(1, 2);
			}
			else if (n==3)
			{
				mo.add(5, 6, 8);
			}
			else if (n==4)
			{
				mo.add(4, 8, 4, 5);
			}
			break;
		}
		case 2:
		{
			System.out.print("Enter the number of arguments: ");
			int n = sc.nextInt();
			if (n==2)
			{
				mo.sub(2, 1);
			}
			else if (n==3)
			{
				mo.sub(5, 6, 8);
			}
			else if (n==4)
			{
				mo.sub(4, 8, 4, 5);
			}
			break;
		}
		case 3:
		{
			System.out.print("Enter the number of arguments: ");
			int n = sc.nextInt();
			if (n==2)
			{
				mo.mul(2, 1);
			}
			else if (n==3)
			{
				mo.mul(5, 6, 8);
			}
			else if (n==4)
			{
				mo.mul(4, 8, 4, 5);
			}
			break;
		}
		case 4:
		{
			System.out.print("Enter the number of arguments: ");
			int n = sc.nextInt();
			if (n==2)
			{
				mo.div(2, 1);
			}
			else if (n==3)
			{
				mo.div(5, 6, 8);
			}
			else if (n==4)
			{
				mo.div(4, 8, 4, 5);
			}
			break;
		}
		default:
		{
			System.out.println("Wrong Input!!");
		}
		}

	}

}
