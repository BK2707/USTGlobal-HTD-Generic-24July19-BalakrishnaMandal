console.log("----------------------");
console.log("FACTORIAL PROGRAM");
console.log("----------------------");
console.log("=====================");
console.log("Named functions");
console.log("=====================");
var fact = 1;
factorial(5);
function factorial(num)
{
    for(var i=1;i<=num;i++)
    {
        fact = fact * i;
    }
}

console.log('Factorial= ' +fact); 

console.log("=====================");
console.log("Function Expression or Anonymous functions");
console.log("=====================");
var fact = 1;
var factorial = function(num)
{
    for(var i=1;i<=num;i++)
    {
        fact = fact * i;
    }
    return fact;
    
}
var factof = factorial(5)
console.log('Factorial= '+factof);

console.log("==========================================");
console.log("Imediate invoked Function Expression ");
console.log("==========================================");
(function(num){
    var fact=1;
    for (var i = 1;i<=num;i++)
    {
        fact=fact*i;
    }
    
    return fact;
})(5);
console.log('Factorial= '+fact);

console.log("==========================================");
console.log("Fat Arrow function ");
console.log("==========================================");
var factorial = (num)=>{
    fact = 1;
    for(var i=1;i<=num;i++)
    {
        fact = fact*i;
        
    }
    return fact;
   
}
factorial(5);
console.log('Factorial= '+fact);


console.log("----------------------");
console.log("FIBONACCI SERIES");
console.log("----------------------");
console.log("=====================");
console.log("Named functions");
console.log("=====================");
var num1=0;
var num2=1;
function fibonnaci (num){
    console.log(num1);
    console.log(num2);
    for(var i=1;i<num;i++)
    {
        var sum=num1+num2;
        console.log(sum);
        num1=num2;
        num2=sum;
        
    }
}
var fibo =fibonnaci(5);

console.log("=====================");
console.log("Function Expression or Anonymous functions");
console.log("=====================");
var fibonacci = function(num){
   var num1=0;
   var num2=1;
   var sum=1;
   console.log(num1);
   console.log(num2);
   for(var i=2;i<=num;i++)
   {
       sum=num1+num2;
       console.log(sum);
       num1=num2;
       num2=sum;
   }
}; 
fibonacci(5);

console.log("==========================================");
console.log("Imediate invoked Function Expression ");
console.log("==========================================");
(function(num){
    var num1=0
    var num2=1;
    sum=1;
    console.log(num1);
    console.log(num2);
    for(var i=2;i<=num;i++)
    {
        sum=num1+num2;
        console.log(sum);
        num1=num2;
        num2=sum;
    }
})(5);

console.log("==========================================");
console.log("Fat Arrow function ");
console.log("==========================================");
var fibonacci = (num)=>
{
    var num1=0
    var num2=1;
    sum=1;
    console.log(num1);
    console.log(num2);
    for(var i=2;i<=num;i++)
    {
        sum=num1+num2;
        console.log(sum);
        num1=num2;
        num2=sum;
    }
}
fibonacci(5);

console.log("-------------------------");
console.log("Circumference of a circle");
console.log("-------------------------");
console.log("=====================");
console.log("Named functions");
console.log("=====================");
function circumference (radius)
{
    return 2*Math.PI*radius;        
}
var perimeter=circumference(100);
console.log('Circumference: '+perimeter);


console.log("=====================");
console.log("Function Expression or Anonymous functions");
console.log("=====================");
var circumference = function(radius)
{
    return 2*Math.PI*radius; 
}; 
var perimeter=circumference(100);
console.log('Circumference: '+perimeter);

console.log("==========================================");
console.log("Imediate invoked Function Expression ");
console.log("==========================================");
(function(radius){
    var perimeter= 2*Math.PI*radius;
    console.log('Circumference: '+perimeter);
})(100);


console.log("==========================================");
console.log("Fat Arrow function ");
console.log("==========================================");
var circumference = (radius)=>
{
    return 2*Math.PI*radius;
}
circumference(100);
console.log('Circumference: '+perimeter);

console.log("----------------------");
console.log("Check Prime Number");
console.log("----------------------");
console.log("=====================");
console.log("Named functions");
console.log("=====================");

function isPrime (num){
    
    for(var i=2;i<num/2;i++)
    {
        if(num%i===0)
        {
            console.log('Its not a Prime!!');
        }
        else
        {
            console.log('Its a Prime!!');
        }    
        
    }
}
isPrime(5);

console.log("=====================");
console.log("Function Expression or Anonymous functions");
console.log("=====================");
var isPrime = function(num){
   
   for(var i=2;i<=num/2;i++)
   {
        if(num%i===0)
        {
            console.log('Its not a Prime!!');
        }
        else
        {
            console.log('Its a Prime!!');
        }   
   }
}; 
isPrime(4);

console.log("==========================================");
console.log("Imediate invoked Function Expression ");
console.log("==========================================");
(function(num){
    
    for(var i=2;i<=num/2;i++)
   {
        check=num%i;
   }
   if(check===0)
    {
        console.log('Its not a Prime!!');
    }
    else
    {
        console.log('Its a Prime!!');
    }   
})(5);

console.log("==========================================");
console.log("Fat Arrow function ");
console.log("==========================================");
var isPrime = (num)=>
{
    
    for(var i=2;i<=num/2;i++)
    {
         var check=num%i;
         
    }
    if(check===0)
    {
        console.log('Its not a Prime!!');
    }
    else
    {
        console.log('Its a Prime!!');
    }   
}
isPrime(4);



/* console.log("=====================");
console.log("Function Expression or Anonymous functions");
console.log("=====================");
var isPrime = function(num){
   
   for(var i=2;i<=num/2;i++)
   {
        if(num%i===0)
        {
            console.log('Its not a Prime!!');
        }
        else
        {
            console.log('Its a Prime!!');
        }   
   }
}; 
isPrime(4);

console.log("==========================================");
console.log("Imediate invoked Function Expression ");
console.log("==========================================");
(function(num){
    
    for(var i=2;i<=num/2;i++)
   {
        check=num%i;
   }
   if(check===0)
    {
        console.log('Its not a Prime!!');
    }
    else
    {
        console.log('Its a Prime!!');
    }   
})(5);

console.log("==========================================");
console.log("Fat Arrow function ");
console.log("==========================================");
var isPrime = (num)=>
{
    
    for(var i=2;i<=num/2;i++)
    {
         var check=num%i;
         
    }
    if(check===0)
    {
        console.log('Its not a Prime!!');
    }
    else
    {
        console.log('Its a Prime!!');
    }   
}
isPrime(4);
 */
