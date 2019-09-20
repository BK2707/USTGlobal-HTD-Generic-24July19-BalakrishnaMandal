function validate()
{
    let forminfo= document.forms[0];
    let fn = forminfo.fname.value;
    let ln = forminfo.lname.value;
    let cn = forminfo.cname.value;
    let ei = forminfo.empid.value;
    if (fn==='')
    {
        forminfo.fname.style.border= '4px solid red';
        fnameerror.textContent = '**Please enter your first name';

    }
    else
    {
        forminfo.fname.style.border= '4px solid green';
        fnameerror.textContent = '';
    }
    if (ln==='')
    {
        forminfo.lname.style.border= '4px solid red';
        lnameerror.textContent = '**Please enter your last name';

    }
    else 
    {
        forminfo.lname.style.border= '4px solid green';
        lnameerror.textContent = '';
    }
    if(cn==='')
    {
        forminfo.cname.style.border= '4px solid red';
        cnameerror.textContent = '**Please enter your company name';

    }
    else 
    {
        forminfo.cname.style.border= '4px solid green';
        cnameerror.textContent = '';
    }
    if(ei==='')
    {
        forminfo.empid.style.border= '4px solid red';
        empiderror.textContent = '**Please enter your emp id';

    }
    else
    {     
        forminfo.empid.style.border= '4px solid green';
        empiderror.textContent = '';
    }
}