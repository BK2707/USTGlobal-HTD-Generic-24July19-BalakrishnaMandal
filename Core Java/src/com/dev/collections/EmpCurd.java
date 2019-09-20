package com.dev.collections;

public interface EmpCurd {
	public boolean addEmp(String key ,Employee emp);
	public void getEmp();
	public boolean removeEmp(String key,Employee emp);
	public void update(String key, Employee emp);
	

}
