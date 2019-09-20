let x = document.getElementById("myForm");
let createform = document.createElement('form');
createform.setAttribute("action", ""); 
createform.setAttribute("method", "post");
x.appendChild(createform);

let namelabel = document.createElement('label'); 
namelabel.innerHTML = "Name "; 
createform.appendChild(namelabel)
let nameinput = document.createElement('input'); 
nameinput.setAttribute("type", "text");
nameinput.setAttribute("name","dname");
createform.appendChild(nameinput);

let linebreak1 = document.createElement('br');
linebreak1.setAttribute("line","dline");
createform.appendChild(linebreak1);
createform.appendChild(linebreak1);
let linebreak2 = document.createElement('br');
linebreak2.setAttribute("line","dline");
createform.appendChild(linebreak2);

let agelabel = document.createElement('label'); 
agelabel.innerHTML = "Age "; 
createform.appendChild(agelabel);
let ageinput = document.createElement('input'); 
ageinput.setAttribute("type", "number");
ageinput.setAttribute("age","dage");
createform.appendChild(ageinput);

let linebreak3 = document.createElement('br');
linebreak3.setAttribute("line","dline");
createform.appendChild(linebreak3);
let linebreak4 = document.createElement('br');
linebreak4.setAttribute("line","dline");
createform.appendChild(linebreak4);

let addresslabel = document.createElement('label'); 
addresslabel.innerHTML = "Address "; 
createform.appendChild(addresslabel);
let addressinput = document.createElement('input'); 
addressinput.setAttribute("type", "text");
addressinput.setAttribute("address","daddress");
createform.appendChild(addressinput);

let linebreak5 = document.createElement('br');
linebreak5.setAttribute("line","dline");
createform.appendChild(linebreak5);
let linebreak6 = document.createElement('br');
linebreak6.setAttribute("line","dline");
createform.appendChild(linebreak6);

let DOBlabel = document.createElement('label'); 
DOBlabel.innerHTML = "Date of Birth:  "; 
createform.appendChild(DOBlabel);
let DOBinput = document.createElement('input'); 
DOBinput.setAttribute("type", "date");
DOBinput.setAttribute("date","ddate");
createform.appendChild(DOBinput);

let linebreak7 = document.createElement('br');
linebreak7.setAttribute("line","dline");
createform.appendChild(linebreak7);
let linebreak8 = document.createElement('br');
linebreak8.setAttribute("line","dline");
createform.appendChild(linebreak8);
