import java.util.*;
class Else_If 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		System.out.print("traffic signal: ");
		String traffic = sc.next();
		if (traffic == "Red")
		{
			System.out.println("STOP!!");
		}
		else if (traffic == "Yellow")
		{
			System.out.println("WAIT!!");
		}
		else
		{
			System.out.println("GO!!");
		}
	}
}
