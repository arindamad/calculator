var Calculator = (function() {
    this.add = (function(number1, number2) {
        var result;
        result = number1 + number2;
        return result;
    });
    this.substruct = (function(number1, number2) {
        var result;
        result = number1 - number2;
        return result;
    });
    this.multiply = (function(number1, number2) {
        var result;
        result = number1 * number2;
        return result;
    });
    this.division = (function(number1, number2) {
        var result;
        result = number1 / number2;
        return result;
    });
});