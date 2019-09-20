public class Operators 
{
	public static void main(String[] args) 
	{
		int a = 1;
		int b = 2;
		int c;
		if (a<b)//Relational operator
		{
			c = a+b;//Arithmatic Operator
			System.out.println("A+B= "+c);
			c++;//Unary Operator
			System.out.println("c++ = "+c);
		}
		else
		{
			c = a & b;//Bitwise Operator
			System.out.println("A & B= "+c);
		}
		boolean p = true;
		boolean q = false;
		if (p!=q) // Assignment Operator
		{
			boolean r = p && q; // Logical Operator
			System.out.println("r: "+r);
		}
	}
}
