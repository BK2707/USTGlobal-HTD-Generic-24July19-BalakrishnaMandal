var Sports=['Cricket','Football','BasketBall','Athletic','Chess'];
var Vehicle=['Car','Bike','Scooter','Truck','Bus'];
console.log('--------------------------------------------------');
var isArray1 = Array.isArray(Vehicle);
var isArray2 = Array.isArray(Sports);
console.log("Sports "+isArray1+", Vehicle "+isArray2)
console.log("                                      ")
console.log('===================================================');
var isInclude1 = Vehicle.includes('Car');
var isInclude2 = Sports.includes('Cricket');
console.log("Sports "+isInclude1+", Vehicle "+isInclude2)
console.log("                                      ")
console.log('===================================================');
Vehicle.push('Bicycle','Train');
console.log("Vehicle[] = "+Vehicle);
Sports.push('Kabadi','ShotPut');
console.log("Sports[] = "+Sports);
console.log("                                      ")
console.log('===================================================');
Vehicle.pop();
console.log("Vehicle[] = "+Vehicle);
Sports.pop();
console.log("Sports[] = "+Sports);
console.log("                                      ")
console.log('===================================================');
Vehicle.unshift('Auto');
console.log("Vehicle[] = "+Vehicle);
Sports.unshift('LongJump');
console.log("Sports[] = "+Sports);
console.log("                                      ")
console.log('===================================================');
Vehicle.shift();
console.log("Vehicle[] = "+Vehicle);
Sports.shift();
console.log("Sports[] = "+Sports);
console.log("                                      ")
console.log('===================================================');
Vehicle.splice(2,3,'Cart');
console.log("Vehicle[] after splice = "+Vehicle);
Sports.splice(2,3,'HighJump');
console.log("Sports[] after splice = "+Sports);
console.log("                                      ")
console.log('===================================================');
Vehicle.slice(0,2);
console.log("Vehicle[] after slice = "+Vehicle);
Sports.slice(0,2);
console.log("Sports[] after slice = "+Sports);
console.log("                                      ")
console.log('===================================================');
var Str1 = Vehicle.join('++');
console.log("Vehicle[] after Join = "+Str1);
var Str2 = Sports.join('++');
console.log("Vehicle[] after Join = "+Str2);
console.log("                                      ")
console.log('===================================================');
var ind1 = Vehicle.indexOf('Football');
console.log("Vehicle[] INDEX = "+ind1);
var ind2 = Sports.indexOf('Bike');
console.log("Vehicle[] INDEX = "+ind2);
console.log("                                      ")
console.log('===================================================');
var numbers=[100,200,300,400,500,600];
var numbers1=[];
for(var i;i<numbers.length;i++){
    if(numbers[i]<200){
        numbers1.push(numbers[i]);
    }
};
var numbers1 = numbers.map((value,index)=>{
    value = value+10;
    return value;
});
console.log("After push numbers1[] = "+numbers1);
var numbers2=numbers.filter(function(value){
    return value>10 && value<500;
});
console.log("After filter numbers2[] = "+numbers2)

var bike=[{
    name: 'Thunderbird 350x',
    price: 182000,
    id: 1
},
{
    name: 'Activa',
    price: 75000,
    id: 2
},
{
    name: 'FZ2.0',
    price: 105000,
    id: 3
},
{
    name: 'Pulsar',
    price: 145000,
    id: 4
}]
var mappedbike = bike.map(function(bikeitems){
    bike.price=bike.price+1000;
    return bike.price;
})
console.log("Bike Price: "+mappedbike);

var filteredbike = bike.map(function(bike){
    var bikefilter = bike.price>95000 && bike.name.length>7;
    return bikefilter;
});
console.log("Afterfilter : ",filteredbike);//doubt

console.log("                                       ")
console.log("=======================================")
console.log("=============StringMethod==============")
console.log("=======================================")
var name = 'BALAKRISHNA';
var str = name.toLowerCase();
console.log(str);
console.log("                                       ")
var name1 = 'mandal';
var str1 = name1.toUpperCase();
console.log(str1);
console.log("                                       ")
var name1 = 'balakrishna';
var str1 = name1.charAt(3);
console.log(str1);
console.log("                                       ")
var name1 = 'mandal';
var str1 = name1.indexOf('d');
console.log(str1);
console.log("                                       ")
var name1 = 'Bhubaneswar';
var str1 = name1.includes('w',0);
console.log(str1);
console.log("                                       ")
var name2 = 'In Odisha';
var str1 = name2.concat(' Banagalore ','is ','a ','City.');
console.log(str1);
console.log("                                       ")
var name1 = 'Bhubaneswar';
var str1 = name1.replace('Bhubaneswar','Bangalore');
console.log(str1);
console.log("                                       ")
var name1 = 'Bhubaneswar_is_a_smart_city';
var str1 = name1.split('_',4);
console.log('Áfter Splitting',str1);
console.log("                                       ")
var name1 = 'Bhubaneswar is a smart city';
var str1 = name1.substr(0,4);
console.log(str1);
console.log("                                       ")
var name1 = 'I love my country';
var str1 = name1.search('n');
console.log(str1);
console.log("                                       ")
var name1 = '                 Bangalore is a silicon city                       ';
var str1 = name1.trimLeft(5);
console.log(str1);
console.log("                                       ")




