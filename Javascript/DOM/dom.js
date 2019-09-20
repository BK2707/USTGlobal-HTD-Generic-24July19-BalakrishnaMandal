//get getElementById()
let pElement = document.getElementById('demo');
console.log(pElement);
pElement.textContent = 'This is new p tag';
//getElementByClassName()
let divElement = document.getElementsByClassName('blue');
console.log(divElement);
//getElementByTagName()
let pElements = document.getElementsByTagName('p');
console.log(pElements);
//getElementByName()
let nameElements= document.getElementsByName('helement');
console.log(nameElements);
//querySelector()
let demoElement = document.querySelector('#demo');
console.log(demoElement);
//querySelectorAll()
let blueClassElements = document.querySelectorAll('.blue');//it will return all the elements using that class name.
console.log(blueClassElements);
//createElement
let buttonElement = document.createElement('button');
buttonElement.textContent = 'Click Me';
console.log(buttonElement);
//to append the child
document.body.appendChild(buttonElement);
let spanELe = document.getElementById('spanid');
spanELe.style.color = 'green';
let buttonElement1 = document.getElementById('buttonELe');
//buttonElement1.className = 'add';
buttonElement1.classList = "add add1";

/*console.log('===========================================================');
tableEle=document.createElement('Table');
tr1=document.createElement('tr');
trd1=document.createElement('td');
trd1.textContent='Name';
trd2=document.createElement('td');
trd2.textContent='Age';

tr2=document.createElement('tr');
trd3=document.createElement('td');
trd3.textContent='John';
trd4=document.createElement('td');
trd4.textContent='14';

tr3=document.createElement('tr');
trd3=document.createElement('td');
trd3.textContent='John';
trd4=document.createElement('td');
trd4.textContent='14';

tr1.appendChild(trd1);
tr1.appendChild(trd2);
tr2.appendChild(trd3);
tr2.appendChild(trd4);

tableEle.appendChild(tr1);
tableEle.appendChild(tr2);
*/

console.log('===========================================================');
document.getElementById('tableid').innerHTML =
                            `<table>
                            <tr>
                                <td>Name</td>
                                <td>Age</td>
                            </tr>
                            <tr>
                                <td>Jhon</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Dinga</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>Sundari</td>
                                <td>25</td>
                            </tr>
                            </table>`;

console.log('===========================================================');                            
let pElementData = document.getElementById('demo1');
//pElementData.style.color = 'Blue';
//pElementData.className = 'blue';
pElementData.className = 'blue fonts';
