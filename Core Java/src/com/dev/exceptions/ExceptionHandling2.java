package com.dev.exceptions;

public class ExceptionHandling2{
	
	public static int divide(int i,int j) {
		int res = i/j;
		return res;
	}
	
	public static void s() {
		StringBuffer sb = new StringBuffer(1);
	}

	public static void main(String[] args) {
		try {
			s();
			System.out.println("No exception for s()");
			int res = divide(10,0);
			System.out.println("No exception for divide()");
			System.out.println(res);
		} catch (Exception e) {
			System.err.println("Exception is caught in catch block");
			System.err.println("getMessage(): "+e.getMessage());
			System.out.println("getLocalizeMessage(): "+e.getLocalizedMessage());
			e.printStackTrace();
		} /*
			 * catch (ArithmeticException e) {
			 * System.err.println("Exception is caught in catch block");
			 * System.err.println("getMessage(): "+e.getMessage()); e.printStackTrace(); }
			 */ /*
				 * when we use multiple exceptions, only one catch block should be defined with
				 * 'Exception' instead of using multiple catch block with multiple exception
				 * type declaration.The better way to use parent exception is to declare in the
				 * last catch block.
				 */ 
			finally{
			System.out.println("finally block");
		}

	}

}
