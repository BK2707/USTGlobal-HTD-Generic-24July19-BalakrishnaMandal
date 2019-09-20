package com.dev.strings;

public class CreatingStrings {

	public static void main(String[] args) {
		String str;
		str = "Hello";
		
		String str1 = "Hey";
		
		String str2 = new String("Hii");
		StringBuffer sb = new StringBuffer("Hello");
		StringBuilder sbi = new StringBuilder("Java");
		//StringBuffer sb1 = new StringBuffer(-1); // will give java.lang.NegativeArraySizeException: -1
		
		
		System.out.println(str);
		System.out.println(str1);
		System.out.println(str2);
		System.out.println(sb);
		System.out.println(sb+" "+sbi);
		System.out.println(sb.length());//will provide actual length of the string 
		System.out.println(sb.capacity());//will provide string length + 16
		//System.out.println(sb1);

	}

}
