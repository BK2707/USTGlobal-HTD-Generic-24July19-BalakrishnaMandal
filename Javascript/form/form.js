function validateForm(){
    let formData =document.forms[0];
    //console.log(formData.uname.value);
    let userName = formData.uname.value;
    let password1 = formData.pass.value;
    if(userName.length>4 && password1.length>7)
    {
        console.log('Success');
        formData.uname.style.border = '4px solid green';
        formData.pass.style.border = '4px solid green';
        formData.loginSubmit.disabled= false;
    }
    else
    {
        formData.uname.style.border = '4px solid red';
        formData.pass.style.border = '4px solid red';
        formData.loginSubmit.disabled = true;
    }
 
}
/*function validateForm1(){
    let formData = document.forms[0];
    let password1 = formData.pass.value;
    if(password1.length>7)
    {
        console.log('Success');
        formData.pass.style.border = '4px solid green';

    }
    else
    {
        formData.pass.style.border = '4px solid red';
    }
}*/