public class AssignmentOperators  
{
	public static void main(String[] args) 
	{
		int i;
		int j;
		i = 20;
		j = 10;
		System.out.println("i = "+i);
		System.out.println("j = "+j);
		
		System.out.println("******");
		i +=j;
		System.out.println("i = "+i);//compound assignment addition

		i -=j;
		System.out.println("i = "+i);//compound  assignment subtraction

		i *=j;
		System.out.println("i = "+i);//compound assignment multiplication
		
		i /=j;
		System.out.println("i = "+i);//compound assignment division

		i %=j;
		System.out.println("i = "+i);//compound assignment modulus
	}
}
