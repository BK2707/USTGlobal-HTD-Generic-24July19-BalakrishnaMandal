package com.dev.arrays;

public class ArrayReverse {
	static ArrayReverse ar = new ArrayReverse();
	int arr[] = {1,2,3,4,5,6,7} ;
	public static void reverse()
	{
		for (int k = ar.arr.length-1; k >=0; k--) {
			System.out.print(ar.arr[k]+" ");
		}
	}

	public static void main(String[] args) {
		
		System.out.print("Array after reversing: ");
		reverse();
			
		}
	}
