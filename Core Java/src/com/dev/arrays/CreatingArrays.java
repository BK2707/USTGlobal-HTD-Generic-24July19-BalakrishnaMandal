package com.dev.arrays;
import java.util.*;
public class CreatingArrays {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		//declaring arrays
		int intArr[];
		char[] chArr;
		short [] shortArr;
		
		//creation array 
		intArr = new int[5];
		chArr = new char[5];
		shortArr = new short[5];
		
		//initializing an array
		intArr[0] = 1;
		intArr[1] = 2;
		intArr[2] = 3;
		intArr[3] = 4;
		intArr[4] = 5;
		
		chArr[0] = 'A';
		chArr[1] = 'B';
		chArr[2] = 'C';
		chArr[3] = 'D';
		chArr[4] = 'E';
		
		shortArr[0]= 11;
		shortArr[1]= 12;
		shortArr[2]= 13;
		shortArr[3]= 14;
		shortArr[4]= 15;
		
		int mul = intArr[0] * 3; //multiplication
		System.out.println(mul);
		
		int add = intArr[1] + 3; //addition
		System.out.println(add);

		int sub = intArr[2]-3; //subtraction
		System.out.println(sub);
		
		int div = intArr[3]/4; //division
		System.out.println(div);
		
		int mod = intArr[4]%4; //modulus
		System.out.println(mod);
		
		int [] intArr1 = new int[5];//declaration and creation
		System.out.println("Length of an array: "+intArr1.length);
		
		int [] intArr2 = {11,22,33,44,55}; // declaration and initialization
		System.out.println("Element at index2 = "+intArr2[2]);
		
		//finding middle element from an array
		for (int i = 0; i < intArr2.length; i++) {
			  int mid = (intArr2.length - 1)/2; 
			  System.out.println("MID: "+intArr2[mid]);
			  return;
				
		}
		

	}

}
