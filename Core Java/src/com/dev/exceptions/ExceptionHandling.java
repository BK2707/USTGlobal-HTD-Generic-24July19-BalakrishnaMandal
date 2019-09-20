package com.dev.exceptions;

public class ExceptionHandling {
	
	public static int divide(int i,int j) throws CustomException {
		int res = i/j;
		System.out.println(res);
		return 1;
	}
	
	public static void s() throws CustomException {
		try {
			StringBuffer sb = new StringBuffer(-1);
		} catch (Exception e) {
			new CustomException().printStackTrace();
		}
	}

	public static void main(String[] args) throws CustomException {
		/*
		 * try { s(); }catch(Exception e) { System.out.println("Exception Occured!!");
		 * e.printStackTrace(); // Gives the exception details of the exception }finally
		 * { System.out.println("This is finally block"); }	
		 * System.out.println("Code after the exception");
		 */
		
		/*
		 * try { divide(10,0); } catch (Exception e) { throw new CustomException(); }
		 */
		s();
		try {
			divide(10,0);
		} catch (Exception e) {
			throw new CustomException();
		}
	}

}
