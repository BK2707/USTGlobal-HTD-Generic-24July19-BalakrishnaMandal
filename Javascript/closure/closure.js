function sum(a,b)
{
    function addsum()
    {
        return a+b;
    }
    return addsum;
}

console.log('-----------------------------------');
var addFunc = sum(10,20)
var total = addFunc();
console.log('Total',total);

console.log('-----------------------------------');
console.log(window);
console.log(this);
console.log(this===window);

console.log('-----------------------------------');
var name = 'balakrishna';
console.log(window.name);
console.log(this.name);

console.log('-----------------------------------');
var person = {
                name : 'Krishna',
                age : 30,
                getName : function()
                {
                    console.log('getName method'+this.name);
                    console.log(window);
                    getData();
                    function getData()
                    {
                        console.log('Get data Method ',this.name);
                    }
                    return this.name;
                }
             }
             var heroName = person.getName();
             console.log('Name: '+heroName);

console.log('-----------------------------------');
for(var i=0;i<5;i++)
{
    console.log(i);

}
console.log('value of i '+i);

for(let j=0;j<5;j++)
{
    console.log(j);   
}
//console.log('value of i '+j);

console.log('-----------------------------------');
var hobbies = ['dancing','singing','cricket'];
console.log('Hobbies: ',hobbies);
var hobbies = ['numismatics'];
console.log('Hobbies '+hobbies);
hobbies = ['singing'];
console.log('====================================');
let fruits = ['Orange','Banana'];
console.log('Fruits '+fruits);
//let fruits =['Jackfruit']; reinitializing not possible in let keyword
fruits =['Jackfruit'];
console.log('Fruits: '+fruits);
console.log('====================================');
const items = ['lipstick','kajal','deo','wallet'];
console.log('Items '+items);
//items =['bag','book']; //reinitializing not possible in const keyword
items[0] =['bag','book'];
console.log('Items: '+items);