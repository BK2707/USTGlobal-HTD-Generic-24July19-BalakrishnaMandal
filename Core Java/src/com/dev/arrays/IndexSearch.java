package com.dev.arrays;

import java.util.Scanner;

public class IndexSearch {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int [] arr = {10,20,30,40,50};
		System.out.print("Enter an index: ");
		int n = sc.nextInt();
		
			if (n< arr.length) {
				for (int i = 0; i < arr.length; i++) {
				System.out.println(arr[n]);
				return;
				}
				
			}
			else {
				System.out.println("Array index is not present");
				return;
			}
			for (int i = 0; i < arr.length; i++) {
			  int mid = (arr.length - 1)/2; 
			  System.out.println(arr[mid]);
			  
				
			}

	}

}
