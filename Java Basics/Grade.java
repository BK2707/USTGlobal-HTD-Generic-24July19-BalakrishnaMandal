import java.util.*;
class Grade 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter your marks: ");
		int marks = sc.nextInt();
		if (marks>=91 && marks<=100)
		{
			System.out.println(" GRADE A");
		}
		else if (marks>=81 && marks<=90)
		{
			System.out.println(" GRADE B");
		}
		else if (marks>=71 && marks<=80)
		{
			System.out.println(" GRADE C");
		}
		else if (marks>=61 && marks<=70)
		{
			System.out.println(" GRADE D");
		}
		else if (marks>=51 && marks<=60)
		{
			System.out.println(" GRADE E");
		}
		else if (marks>=41 && marks<=50)
		{
			System.out.println(" RETEST");
		}
		else if (marks<=40)
		{
			System.out.println(" FAIL");
		}
		else
		{
			System.out.println("Invalid Marks!!");
		}
	}
}
