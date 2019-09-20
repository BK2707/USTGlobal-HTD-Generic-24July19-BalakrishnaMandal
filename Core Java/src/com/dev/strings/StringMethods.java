package com.dev.strings;

public class StringMethods {

	public static void main(String[] args) {
		
		String str = "Some_string";
		int length = str.length();
		System.out.println("Output of length(): "+length);
		
		char ch[] = str.toCharArray(); //change a string into an array
		System.out.println("Output of toCharArray(): "+ch[3]);
		
		char ind = str.charAt(3); //checks the character index
		System.out.println("Output of charAt(): "+ind);
		
		String str1 = "some_string";
		boolean b = str.equals(str1); //comparing two strings
		System.out.println("Output of equals(): "+b);
		
		boolean b1 = str.equalsIgnoreCase(str1); //comparing two strings with ignoring the cases(upper/lower)
		System.out.println("Output of equalsIgnoreCase(): "+b1);
		
		boolean b2 = str.contains("som"); // checks particular string contains in string
		System.out.println("Output of contains(): "+b2);
		
		String g = str.replace('S', 'A'); //replace one char to another from another char 
		System.out.println("Output of replace(): "+g);
		
		int f = str.indexOf('S'); //checks the index of a char in a string
		System.out.println("Output of indexOf(): "+f);
		
		String s = str.toUpperCase(); //changes all character into uppercase
		System.out.println("Output of toUpperCase(): "+s);
		
		String l = str.toLowerCase();//changes all character into lowercase
		System.out.println("Output of toLowerCase(): "+l);
		
		String res = str.substring(3);
		System.out.println("Output of substring(beginInt): "+res); //printing substring with one argument(beg)
		
		String res1 = str.substring(3,11);
		System.out.println("Output of substring(beginInt,endInt): "+res1); // printing substring using two arg(beg,end)
		
		System.out.println("################################################################################");
		
		String str2 = "Balakrishna Mandal";
		String str3 = "bala krishna mandal";
		
		System.out.println("String length: "+str2.length());
		

		System.out.println("Index of Character: "+str2.charAt(3));
		
		System.out.println("is equal: "+str2.equals(str3));
		
		System.out.println("is equal(ignoring cases): "+str2.equalsIgnoreCase(str3));

	}

}
