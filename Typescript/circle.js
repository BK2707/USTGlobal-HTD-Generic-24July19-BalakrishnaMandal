var MathOperations;
(function (MathOperations) {
    var circle;
    (function (circle) {
        var PI = 3.14;
        function circumferenceOfCircle(radius) {
            console.log('The Circumference of circle is ' + 2 * PI * radius);
        }
        circle.circumferenceOfCircle = circumferenceOfCircle;
        function areaOfCircle(radius) {
            console.log('The area of circle is ' + PI * radius * radius);
        }
        circle.areaOfCircle = areaOfCircle;
    })(circle = MathOperations.circle || (MathOperations.circle = {}));
})(MathOperations || (MathOperations = {}));
