console.log("====================");
var numValue = 10;
/*var numvalue1 = '10';
if(numValue == numValue1)
{
    console.log("Equal");
}
else
{
    console.log("not equal");
}*/

console.log("=====================");
console.log(typeof numValue);
console.log(typeof numValue);

console.log("=====================");
console.log("Ternary Operator");
console.log("=====================");
var age = 100;
var checkAge = (age>21)?'Greater':(age===21)?'Equal':'Lesser';
console.log(checkAge);

console.log("=====================");
console.log("Objects inside the array");
console.log("=====================");
var emp=[{name : 'Varun',
          age : 29},
          {name : 'Deepika',
          age : 34},
          {name : 'Alia',
          age : 25},

        ];
for(var i =0;i<emp.length;i++)
{
    console.log(emp[i]);
}

console.log("=====================");
console.log("Forof()");
console.log("=====================");
var hobbies = [ 'cooking' , 'painting' , 'travelling' , 'hikeing' ];
for(var value of hobbies)
{
console.log('hobbies using loops '+value);
}

console.log("=====================");
console.log("Forin() for arrays");
console.log("=====================");
var hobbies = [ 'cooking' , 'painting' , 'travelling' , 'hikeing' ];
for(var index in hobbies)
{
console.log(hobbies[index]);
}

