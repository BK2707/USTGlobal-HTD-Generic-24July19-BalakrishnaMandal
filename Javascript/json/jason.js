let employeeJSON = {
                        name: 'Dinga',
                        age: 25,
                        hobbies : ['dancing','singing']

                    }
console.log(`My name is ${employeeJSON.name}`);
console.log(employeeJSON);
let jsonObject = JSON.stringify(employeeJSON);// to convert javascript object to json object 
console.log(jsonObject)
let jsObject = JSON.parse(jsonObject);//to convert the json object to javascript object
console.log(jsObject);
/*const employee = {
                    name: 'Amit',
                    age: 25,
                    hobbies : ['traveling','singing']
    
                  }
                  let{name,age,hobbies}=employee;
        
const hobbies = ['singing','dancing', 'cooking'];
let h1 = hobbies[0];
let h2 = hobbies[1];
let h3 = hobbies[2];
let[h1,h2,h3]=hobbies; */

