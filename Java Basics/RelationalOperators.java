public class RelationalOperators  
{
	public static void main(String[] args) 
	{
		int i = 10;							//In order to compare between two integer
		int j = 20;

		boolean b = i == j;
		System.out.println("i == j: "+b);

		b= i != j;
		System.out.println("i != j: "+b);

		b = i > j;
		System.out.println("i > j: "+b);

		b= i < j;
		System.out.println("i < j: "+b);

		b= i >= j;
		System.out.println("i >= j: "+b);

		b= i <= j;
		System.out.println("i <= j: "+b);

		int p = 'A';						//In order to compare between string and integer value
		int q = 65;

		boolean bo = p == q;
		System.out.println("p == q: "+bo);

		bo= p != q;
		System.out.println("p != q: "+bo);

		bo = q > q;
		System.out.println("p > q: "+bo);

		bo= p < q;
		System.out.println("p < q: "+bo);

		bo= p >= q;
		System.out.println("p >= q: "+bo);

		bo= p <= q;
		System.out.println("p <= q: "+bo);



	}
}
