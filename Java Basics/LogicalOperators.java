public class LogicalOperators  
{
	public static void main(String[] args) 
	{
		boolean b = true;
		boolean c = false;

		boolean d = b && c;
		System.out.println("b && c: "+d);

		d= b || c;
		System.out.println("b || c: "+d);

		d= !(b || c);
		System.out.println("!(b||c): "+d);

	}
}
