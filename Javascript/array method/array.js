console.log("=====================");
console.log("for each method");
console.log("=====================");
var hobbies=['carrom','football','cooking','travelling'];
hobbies.forEach(function(value,index){
    if(value.length>7)
    console.log('hobbies= '+value);
});

console.log("=====================");
console.log(" variable hoisting");
console.log("=====================");
console.log(myName);
var myName = 'bala';
console.log(myName);

console.log("=====================");
console.log(" variable hoisting under the method only");
console.log("=====================");
console.log(myName1);
var myName1 = 'bala';
function getage()
{
    console.log(age1);
    var age1 = 10;
    console.log(age1);

}
getage();
console.log("==============================================");
console.log('isarray method');
var checkArray = Array.isArray(hobbies);1
console.log('is array= '+checkArray);
console.log("==============================================");
console.log('searching in array');
var checkIncludes = hobbies.includes('football');
console.log('isInclude= '+checkIncludes);
console.log("==============================================");
console.log('searching in array with index');
var checkIncludeswitharray = hobbies.includes('football',2);
console.log('search with index= '+checkIncludeswitharray);
console.log("==============================================");
console.log('adding elements in the array ');
var addelement = hobbies.push('dancing','singing');
console.log('element added= '+addelement);
console.log("==============================================");
console.log('removing last element from the array');
var removeelement = hobbies.pop();
console.log('element removed= '+removeelement);
console.log("==============================================");
console.log('adding element at starting in the array');
var add= hobbies.shift('shopping','swiming');
console.log('new array= ',add);
console.log("==============================================");
console.log('removing elements at starting from the array');
var remove= hobbies.unshift();
console.log('new array= ',remove);
console.log("==============================================");
console.log('adding and removing elements in between from the array');
var alter = hobbies.splice(0,2,'drinking','partying');
console.log('new array= '+alter);
console.log("==============================================");
console.log('modifying the array');
var modify = hobbies.slice(1,3);
console.log('new array= '+modify);
console.log("==============================================");
console.log('convert the array into the string');
var string = hobbies.join('_');
console.log('string= '+string);
console.log("==============================================");
console.log('Index of the element ');
var indexOf = hobbies.indexOf('football');
console.log('index= ',+indexOf);
console.log("==============================================");
console.log('map method');
var number = [10,20,30,40,50];
var number1 = number.map(function(value,index){
    value=value+10;
    return value;
})
console.log('number1= '+number1);

console.log("==============================================");
console.log('filter method');
var number = [10,20,30,40,50];
var number2 = number.filter((value)=>{
     return value>10;
})
console.log('number2= '+number2);

console.log("==============================================");
var items=[{
            name:'lipstick',
            price: 95,
            id: 1
            },
            {
                name: 'perfume',
                price: 100,
                id:2
            },
            {
                name: 'watch',
                price:1000,
                id:3
            },
            {
                name: 'shoes',
                price: 2000,
                id:4
            }]
var mappeditems = items.map(function(items){
    items.price=items.price +100;
    return items.price;
    
})
console.log('after update: '+mappeditems);
var filteritems=items.filter(function(items){
    var itemfilter = items.price>100 && items.name.length>7;
    return itemfilter;
});
console.log('after filter: '+filteritems);