console.log("=====================");
console.log("Named functions");
console.log("=====================");
function sum(num1,num2)
{
    if(num1!==undefined && num2!==undefined)
    {
    sumValue=num1 + num2;
    
    }
}
sum(10,20)
console.log('sum= '+sumValue);

console.log("=====================");
console.log("Function Expression or Anonymous functions");
console.log("=====================");
var sumVal=sum(10,30)
function sum(num1,num2)
{
    if(num1!==undefined && num2!==undefined)
    {
    sumValue=num1 + num2;
    return sumValue;
    
    }
}
console.log('sum= '+sumValue);

console.log("=====================");
console.log("Function Expression or Anonymous functions");
console.log("=====================");
var addData = function(num1,num2)
{
    sumValue=num1+num2;
    return sumVal;

};
var addValue = addData(10,10);
console.log('addValue= '+addValue);

console.log("===========================================");
console.log("Immediate invoked Explicitly function(ITFE)");
console.log("===========================================");
(function(num1,num2){
    var sumData = num1+num2;
    console.log('sumData= '+sumData);
}(5,6));

console.log("=====================");
console.log("Fat Arrow Function");
console.log("=====================");
var sumValue = (num1,num2) =>{
    var totalSum = num1 + num2;
    return totalSum;
}
var valueData = sumValue(15,25)
console.log('Value= '+valueData);

console.log("=====================");
console.log("=====================");
var sumVal = (num1,num2) => num1+num2;
var sumData = sumVal(10,20);
console.log('Sum= '+sumData);

console.log("=====================");
console.log("=======Mutable=======");
console.log("=====================");
var message = 'Hello';
console.log(message);
message = message + 'World';
console.log(message);
var message1 = message;
console.log(message);
message = 'HI';
console.log(message);

console.log("======================");
console.log("===Object Referance===");
console.log("======================");
var person = {
                name : 'Aman',
                age  :  30,
                color : 'Fair' 
             };
console.log(person);
person.name = 'Amit';
console.log(person);
var person1 = person;
console.log(person);
person1.name = 'Raja';
console.log(person);
console.log(person1);

console.log("=====================");
console.log("===Named Function ===");
console.log("=====================");
function first()
{
    console.log('First');
}
function second()
{
    console.log('Second');
}
first();
second();

console.log("==================================");
console.log("===Named Function with timeout ===");
console.log("==================================");
function first()
{
    setTimeout(function(){
        console.log('first');
    },10000);
    
}
function second()
{
    console.log('Second');
}
first();
second();

console.log("=======================");
console.log("===Callback function===");
console.log("=======================");
/*function first()
{
    setTimeout(function(){
        console.log('first');
    },1000);
    
}*/
function second()
{
    console.log('Second');
}
first(second);
function first(Callback)
{
    setTimeout(function(){
        console.log('first');
        Callback();
    },1000);
}


