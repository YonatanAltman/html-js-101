console.log('hello works');

let arr = document.getElementsByClassName('square');
let input = document.getElementById('name');

console.log(arr);

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log(element);

    })

}

input.addEventListener('blur', (e) => {
    print('BLUR');

})
input.addEventListener('click', (e) => {
    console.log('CLICK');

})
input.addEventListener('keypress', (e) => {
    console.log(e.key);

})

function print(value) {

    console.group('PRINT')
    console.log(value);
    console.groupEnd();

}

// grades
// major
// gender
// married
// age
// distance