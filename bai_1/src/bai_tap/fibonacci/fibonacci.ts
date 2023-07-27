// tìm 20 số fibonacci không đệ quy
function sumFibonacci(amount: number): string {
    let firstNumber: number = 0;
    let secondNumber: number = 1;
    let thirdNumber: number;
    let sumNumber: number = firstNumber + secondNumber;
    let sumString: string = firstNumber + "," + secondNumber;
    for (let i = 3; i <= amount; i++) {
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
function fibonacci(num: number): number {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);

}

let sum = 0;
for (let i = 1; i <= 20; i++) {
    //20 số fibonacci đầu tiền
    console.log(fibonacci(i));
    //tổng 20 số
    sum = sum + fibonacci(i)
}
console.log("Tổng 20 số fibonacci đầu tiên là: " + sum);