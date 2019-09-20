function validate()
{
    let employeeData = document.forms['employeeForm'];
    let empPassword = employeeData.pass.value;
    let empCPassword = employeeData.cpass.value;
    if(empPassword==='' && empCPassword==='')
    {
        alert('please enter the password');
        return false;
    }
    if(empPassword === empCPassword)
    {
        alert('success');
        return true;
    }
    else
    {
        alert('Password Not Matching');
        return false;
    }
}