package com.dev.threads;

public class Thread3 implements  Runnable{
	@Override
	public void run() {
		System.out.println("T3 Thread started....");
		
		System.out.println("MainThreadClass prints the value of k");
		
		for (int k = 0; k <= 10; k++) {
			System.out.println("k: "+k);
			
		}
		System.out.println("T3 Thread terminated.... ");
				
	}
	
}
