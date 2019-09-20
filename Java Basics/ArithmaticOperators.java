public class ArithmaticOperators  
{
	public static void main(String[] args) 
	{
		int i = 10;
		int j = 20;
		char c1 = 'a';
		char c2 = 'z';
		long l = 14;


		int res = i+j;//addition(initializtion of a variable)
		System.out.println("Addition: "+res);

		res = i-j;//subtraction (reinitializtion of a variable)
		System.out.println("Subtraction: "+res);

		res = i*j;//multiplication (reinitializtion of a variable)
		System.out.println("Multiplication: "+res);

		res = i/j;//division (reinitializtion of a variable)
		System.out.println("Division: "+res);

		res = i+j;//modulus (reinitializtion of a variable)
		System.out.println("Modulus: "+res);
		
		res = c1+c2;//character addition (reinitializtion of a variable)
		System.out.println("Character addition: "+res);
		
		res = c1+10;//character and integer addition
		System.out.println(res);

		l =4.5 ;//character and integer addition
		System.out.println(l);

	}
}