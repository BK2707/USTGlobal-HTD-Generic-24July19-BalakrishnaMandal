package com.dev.threads;

public class MainThreadClass {

	public static void main(String[] args) {
		System.out.println("Main Thread started....");
		
		System.out.println("MainThreadClass prints the value of i");
		
		Thread2 t2 = new Thread2(); 
		t2.setName("Thread T2");
		t2.setPriority(2);
		t2.start();
		
		Thread3 t3 = new Thread3();
		Thread t = new Thread(t3);
		t.setName("Thread T3");
		t.setPriority(3);
		t.start();
			
		Thread.currentThread().setName("Main Thread");
		Thread.currentThread().setPriority(1);
		//new Thread(new T3()).start();
		
		for (int i = 0; i <= 10; i++) {
			System.out.println("i: "+i);
			
		}
		System.out.println("Thread Name3: "+t.getName());
		System.out.println("Thread Name2: "+t2.getName());
		System.out.println("Thread Name1: "+Thread.currentThread().getName());
		
		System.out.println("Thread3 id: "+t.getId());
		System.out.println("Thread2 id: "+t2.getId());
		System.out.println("Thread1 id: "+Thread.currentThread().getId());
		
		System.out.println("Thread3 priority: "+t.getPriority());
		System.out.println("Thread2 priority: "+t2.getPriority());
		System.out.println("Thread1 priority: "+Thread.currentThread().getPriority());
		
		System.out.println("Main Thread terminated.... ");

	}

}
