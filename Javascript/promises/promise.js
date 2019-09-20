let employeeData = new Promise(function(resolve,reject)
{
    const employee = [
                         {
                             name : 'Shahrukh',
                             age : 60

                         },
                         {
                            name : 'ranveer',
                            age : 35

                        },
                        {
                            name : 'amitabh',
                            age : 80

                        }

                     ];
if(10>10)
{
    reject('Failed');
}
else
{
    resolve(employee);
}
});

employeeData.then((data)=>{
    //console.log('Employee data =',data);
    return data;
}).catch((error)=>{
    console.log('Catch block = '+error);
}).then(function(data1){
    console.log('This is then block 2',data1);
});