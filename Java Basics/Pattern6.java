import java.util.Scanner;
public class Pattern6 
{
	public static void main(String[] args) 
	{
		int letter = 65;
		int m=1;
		for(int i= 1;i<=3;i++){
			for (int j = 1;j<=3-i;j++ )
			{
				System.out.print(" ");
			}
			for (int j = 1;j<=i*2-1 ;j++ )
			{
				System.out.print((char)letter);
				letter++;
			}
			System.out.println();
		}
		for(int i= 2;i>0;i--){
			for (int j = 1;j<=3-i;j++ )
			{
				System.out.print(" ");
			}
			for (int j = 1;j<=i*2-1 ;j++ )
			{
				System.out.print(m);
				m++;
			}
			System.out.println();
		}
	}
}
