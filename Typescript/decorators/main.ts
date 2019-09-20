function printConstructor(cons: Function){
    console.log(cons);
}
@printConstructor
class Sample {
    constructor() {
        console.log('Hii I am Sample class constructor');
        
    }
}