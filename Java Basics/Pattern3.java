import java.util.*;
public class Pattern3 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the size: ");
		int n = sc.nextInt();
		int letter = 65;
		int letter1 = 97;
		for(int i = 1 ; i<=n ; i++)
		{
			for (int j = 1;j<=i;j++)
			{
				System.out.print((char)letter+("")+(char)letter1+" ");
				letter++;
				letter1++;
			}
			System.out.println( );
		}
		
	}
}
