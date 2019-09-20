package com.dev.threads;

public class SyncMainThread {

	public static void main(String[] args) throws InterruptedException {
		System.out.println("SyncMain Thread Started...");
		
		Printer p = new Printer();
		/*
		 * When two or more threads are make use of single resource is known
		 * as Race Condition
		 */
		
		Thread4 t4 = new Thread4(p);
		t4.start();
		
		//t4.join();//when synchronized method is used no need to use join method
		
		new Thread5(p).start();
		
		System.out.println("SyncMain Thread Terminated...");
		

	}

}
