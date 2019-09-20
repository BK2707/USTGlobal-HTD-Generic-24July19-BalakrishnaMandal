function valForm()
{
    let studentData = document.forms['studentform'];
    let studentName = studentData.sname.value;
    let mobNumber = studentData.snumber.value;
    let city = studentData.scity.value;
    if(studentName==='')
    {
        alert('please enter the name');
        return false;
    }
    if (mobNumber==='')
    {
        alert('please enter the number');
        return false;
        
    }         
    else if (city==='') 
    {
        alert('please enter the address');
        return false;
    }
    else if(studentName==='/^[a-z0-9]+$/i')
    {
        alert('please enter the valid name');
    }
    else if(mobNumber<10)
    {
        alert('enter the valid mobile number');
        return false;        
    }
    else if(city==='/^[a-z0-9]+$/i')
    {
        alert('please enter the valid Cityname');
    }
    else
    {
        return true;        
    }
}