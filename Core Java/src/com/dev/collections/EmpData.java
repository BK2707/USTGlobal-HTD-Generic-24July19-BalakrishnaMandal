package com.dev.collections;

public class EmpData {

	public static void main(String[] args) {
		EmpCurdImp eci = new EmpCurdImp();
		
		Employee e1 = new Employee();
		e1.setName("Balakrishna");
		e1.setId(201);
		e1.setEmail("bala@gmail.com");
		e1.setPassword(4524);
		
		Employee e2 = new Employee();
		e2.setName("Abhinash");
		e2.setId(202);
		e2.setEmail("abhin@gmail.com");
		e2.setPassword(4751);
		
		eci.addEmp("1", e1);
		eci.addEmp("2", e2);
		eci.getEmp();
		System.out.println();
		
		eci.removeEmp("1", e1);
		System.out.println("After Removing an element");
		eci.getEmp();
		System.out.println();
		
		e2.setName("Abhin");
		eci.update("2",e2);
		System.out.println("After Updating a value");
		eci.getEmp();
	}

}
