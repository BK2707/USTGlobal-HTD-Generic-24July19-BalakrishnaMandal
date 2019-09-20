package com.dev.collections;

import java.util.HashMap;

public class EmpCurdImp implements EmpCurd {
	HashMap<String, Employee> hm = new HashMap<String, Employee>();

	@Override
	public boolean addEmp(String key ,Employee emp) {
		if(hm!=null) {
			hm.put(key,emp);
			return true;
		}
		return false;
		
	}
	@Override
	public void getEmp() {
		System.out.println(hm);		
	}
	@Override
	public boolean removeEmp(String key,Employee emp) {
		
		boolean b1 = hm.remove(key, emp);
		if (b1) {
			return true;
		}
		return false;
	}
	@Override
	public void update(String key, Employee emp) {
		hm.replace(key, emp);
		
	}



}
