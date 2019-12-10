console.log('Hello Works');

let person = {
    firstName: 'Yonatan',
    lastName: 'Altman',
    age: 28,
    birthDay: new Date(1991, 0)
}
let dog = {
    firstName: 'Lala',
    age: 7,
    birthDay: new Date(2019, 2)
}
let arr = [person, dog];
// let arr = [];
// arr.push(person);
// arr.push(dog);

console.log(arr);


let button = document.getElementById('btn');
let registerBtn = document.getElementById('register-btn');

button.addEventListener('click', function (e) {
    console.log('click');
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let age = Number(document.getElementById('age').value);
    let birthDay = document.getElementById('date').value;


    let person = { firstName, lastName, age, birthDay };

    arr.push(person);
    let older = { age: 0 }, longesName = { firstName: '' };
    arr.forEach(element => {
        console.log(element);
        if (element.age > older.age) {
            older = element;
        }
        if (element.firstName.length > longesName.firstName.length) {
            longesName = element;
        }

    });

    console.log('older', older);
    console.log('longesName', longesName);


});


registerBtn.addEventListener('click', (e) => {
    // preventDefault for prevent Submit Event
    e.preventDefault();


    let email = document.getElementById('email').value;
    let pass1 = document.getElementById('password1').value;
    let pass2 = document.getElementById('password2').value;


    let isFormValid = true;
    let form = { email, pass1, pass2 };
    console.log(form);
    if (!emailValidation(form.email)) {
        alert('Wrong Email!');
        isFormValid = false;
    }
    if (!passwordValidation(form.pass1, form.pass2)) {

        alert('Passwors do not match!');
        isFormValid = false;
    }

    if (isFormValid) {
        console.log('Work Done');

        document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
    } else { 
        alert('go home');
    }


})

function emailValidation(email) {
    var arr = email.split('@');
    return arr.length === 2;
}
function passwordValidation(pass1, pass2) {
    return pass1 === pass2;
}