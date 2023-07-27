// tìm 20 số fibonacci không đệ quy
function sumFibonacci(amount) {
    var firstNumber = 0;
    var secondNumber = 1;
    var thirdNumber;
    var sumNumber = firstNumber + secondNumber;
    var sumString = firstNumber + "," + secondNumber;
    for (var i = 3; i <= amount; i++) {
        thirdNumber = firstNumber + secondNumber;
        sumNumber += thirdNumber;
        sumString += "," + thirdNumber;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
    }
    return "Dãy Fibonacci: " + sumString + " Tổng Fibonacci: " + sumNumber;
}
console.log(sumFibonacci(20));
// tìm 20 số fibonacci có đệ quy
function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
var sum = 0;
for (var i = 1; i <= 20; i++) {
    //20 số fibonacci đầu tiền
    console.log(fibonacci(i));
    //tổng 20 số
    sum = sum + fibonacci(i);
}
console.log("Tổng 20 số fibonacci đầu tiên là: " + sum);
