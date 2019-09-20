import java.util.*;
public class WeekDays 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the Day Number: ");
		int dayNum = sc.nextInt();
		switch (dayNum)
		{
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			System.out.println("Weekdays");
			break;
		default :
			System.out.println("Invalid Day Num!!");
			break;
		case 6:
		case 7:
			System.out.println("Weekends");
			break;
		
		}
	}
}
