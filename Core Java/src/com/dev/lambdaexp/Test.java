package com.dev.lambdaexp;

public class Test {

	public static void main(String[] args) {
		FuncInt f = () -> {
			try {
				int i = 10/0;
				System.out.println(i);
			} catch (Exception e) {
				System.out.println("Arithmatic Exception is caught");
			}				
		};//Lambda Expression
		FuncInt2 f2 = (int i) -> {
			for(int j =1; j<=i;j++) {
				System.out.println(j);
			}
		};
		System.out.println("Lambda function without arguments");
		f.printVal();
		System.out.println();
		System.out.println("lambda function with some arguments");
		f2.printVal(5);
	}

}
/*
 * In order to give lambda expression we do not have to override a method.
 *  We can write any logic with exception also.
 *  If we have only one statement in the lambda function, no need to use
 *  '{}' braces.
 *  The lambda function ends with the semicolon.
 */