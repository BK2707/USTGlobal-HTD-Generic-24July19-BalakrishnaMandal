namespace MathOperations{
    export namespace circle{
        const PI =3.14;
        export function circumferenceOfCircle(radius :number)
        {
            console.log('The Circumference of circle is '+2*PI*radius);
        }
        export function areaOfCircle(radius:number)
        {
            console.log('The area of circle is '+PI*radius*radius);
        }
    }
}
