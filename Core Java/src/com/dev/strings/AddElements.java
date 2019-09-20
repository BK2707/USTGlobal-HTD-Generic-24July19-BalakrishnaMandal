package com.dev.strings;

public class AddElements {
	
	public static void add() {
		int arr[] = {4,5,6,7,9,2,5};
		int middle = arr[(arr.length-1)/2];
		int seclast = arr[arr.length-2];
		int sum = arr[0]+middle+seclast;
		System.out.println(sum);
		
	}

	public static void main(String[] args) {
		
		System.out.print("Sum: ");
		add();   

	}

}
