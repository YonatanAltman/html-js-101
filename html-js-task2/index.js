// 1)
console.log('Hello Work');
let num1 = 213;
const num2= 51;
let t1 = new Date();
// 2)
num1 = 44.44;


console.log(num1 * num2);
// 3)
console.log(num1 / num2);
// 4)
console.log(num1 - num2);
// 5)
console.log(num1 + num2);
// 6)
console.log((num1 * num2) - (num1 / num2));

// 7)
document.getElementById('btn').addEventListener("click", function (e) {
    var input = document.getElementById('myi');
    if (input) {
        console.log('Hello ' + input.value + ' ' + '😎');


        console.log((input.value.includes('a') || input.value.includes('5')));


    }

})