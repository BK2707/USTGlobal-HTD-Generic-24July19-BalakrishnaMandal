/* let Name = 'Balakrishna';
console.log(Name);
alert(Name);
let lName = 'Mandal';
console.log(lName);
let company;// internally it takes "any" type
company='testyantra';
company=23;
console.log(company);

let sample : number | boolean;// union taking variable number and boolean only
sample = 10;
sample = true;

console.log(sample);

let myArray :string[]=['gyfyuh','ghhgj'];
console.log(myArray);

let myTuple:[string,number,boolean] = ['ghgk',45,true];//we have to pass the value in the array as the datatypes passes in an array in same order.


enum colors {
    red = 300,
    blue,
    black,
    green
}
console.log(colors.green);

 */
/* class Person {
    constructor( public personName:string,public personAge:number){}

}

let person = new Person( 'bala',21);
console.log(person.personName); */

/* let myName ='bala';
myName=null; */

/* class Car{
    constructor(public brand : string, public model:string){}
}
let bmwCar = new Car('BMW','X5');
console.log(bmwCar.brand);
console.log(bmwCar.model);

let benzCar :Car =
{
    brand :'Benz',
    model : 'c200'
}
console.log(benzCar.brand);
console.log(benzCar.model); */

/* class Person{
    salary : number=25000;
    constructor(public name:string , public age:number)
    {}
}
class Student extends Person{
    constructor(public myName:string , public myAge:number , public USN:number){
        super(myName,myAge)
    }
}
 */
/* let person1 = new Person('Dinga',23);
let student1 = new Student('Dingi',25,46649);
console.log(student1.salary);// by using subclass object we can call super class members also.
console.log(person1.name);
console.log(person1.age);
console.log(student1.myName);
console.log(student1.myAge);
console.log(student1.USN);
console.log(student1.name);// by using subclass object we can call super class members also. */

/* class Person
{
    constructor(public name:string,public age:number, public degree ?:string)// '?' is used to make optional not mandatory to initialize 
    {

    }
}
let person1: Person={
    name:'bala',
    age:24
}
let person2: Person={
    name:'bala',
    age:24,
    degree:'B-tech'
}

console.log(person1.name);
console.log(person1.age);
console.log(person1.degree);
console.log('---------------');
console.log(person2.name);
console.log(person2.age);
console.log(person2.degree); */

/* interface Student{
    name: string;
    age:number;
    printdetails():void;
}
class Person implements Student
{
    name='Bala';
    age=22;
    printdetails()
    {
        console.log("My name is "+this.name +" and age is "+this.age);
    }
}
let person1 = new Person();
person1.printdetails();

let student1 : Student ={
    name : 'Krishna',
    age : 23,
    printdetails:()=>{
        console.log("My name is "+student1.name +" and age is "+student1.age);
    }
}
student1.printdetails(); */


/* console.log('----------Generic--------------------');
function getArray<p>(items:p[]):p[]{
    return new Array<p>().concat(items);
}
let strArray =getArray<string>(['Bala','Krishna','Sanjay']);
let numArray =getArray<number>([25,45,58]);
numArray.push(21);
strArray.push('Som');
console.log(strArray);
console.log(numArray); */

/// <reference path="./circle.ts"/>
/// <reference path="./rectangle.ts"/>
MathOperations.circle.circumferenceOfCircle(234);
MathOperations.rectangle.perimeter(6,4);
