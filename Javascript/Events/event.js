// to create alert in js
function sayHello(){
    alert('HEllo!!!!!');
}

console.log('=======================================');
//to create onclick on js by class id
let buttonElement = document.getElementById('clickButton');
buttonElement.onclick = function(){
    alert ('hello buddy');

}
/*let buttonEle = document.createElement('button');
buttonEle.textContent = 'Click here!!';
document.body.appendChild(buttonEle);
buttonEle.onclick = function(){
    alert('Hiiiiiiii!!!!!');
}*/
console.log('=======================================');
//to create p element
function createPElement(){
    let pElementData = document.createElement('p');
    pElementData.textContent = 'This is p Element';
    document.body.appendChild(pElementData);

}
console.log('=======================================');
// to create eventlistener on text
let alertElement = document.getElementById('alertHi');
alertElement.addEventListener('click', function(){
                                alert('Good Evening');
                                });

/*console.log('=======================================');
// to 
function showText(){
let inputElement = document.getElementById('showData');
console.log(inputElement.value); 
}   */                     

console.log('=======================================');

let h1Element = document.createElement('h1');   
function showText(){
let inputElement = document.getElementById('showData');
    console.log(inputElement.value); 
    h1Element.textContent=inputElement.value;
    document.body.appendChild(h1Element);
}