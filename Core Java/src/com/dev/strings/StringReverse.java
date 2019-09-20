package com.dev.strings;

public class StringReverse {

	public static void main(String[] args) {
		String str = "Bala";
		char ch[]= str.toCharArray();
		System.out.print("String After Reverse: ");
		for (int i = ch.length-1; i >=0 ; i--) {
			System.out.print(ch[i]);
			String rev = ch.toString();
			System.out.println(rev);
		}
		

	}

}
