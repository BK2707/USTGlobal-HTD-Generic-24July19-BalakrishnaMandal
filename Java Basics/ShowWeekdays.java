import java.util.*;
public class ShowWeekdays 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the weekDay num: ");
		int weekdays = sc.nextInt();
		 if (weekdays<6)
		 {
			 System.out.println(" Its Weekday");
		 }
		else
		{
			for(int i =1 ; i<=5 ; i++)
			{
				System.out.println("Its Weekend!!");
			}
		}
	}
}
