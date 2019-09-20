function factorial (num){
    if(num==0||num==1){
        return 1;
    }
    else{
        return factorial(num-1)*num;
    }
} 
let factorialValue = factorial(5);
console.log('Factorial: '+factorialValue);