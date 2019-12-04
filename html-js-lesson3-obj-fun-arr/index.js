console.log('hello Object');
console.log(4);
console.log(4 + 5);
console.log('hh' + 4 + 5);
console.log(4 + 5 + 'hh');


function printHelloWhenUserGetHome(fName, lName) {
    console.log('Hello ' +
        fName +
        ' ' +
        lName);

}

let student = {
    firstName: 'Yonatan',
    lastName: 'Altman',
    age: 28,
    fullname: function () {
        return 'FULL NAME:' + this.firstName + ' ' + this.lastName;
    }

};

student2 = {};
student2.name = 'Sivan';
student2.lname = 'Zohar';
student2.age = 18;
student2.fullname = function () {
    return this.name + ' ' + this.lname;
}
cat = {
    name: 'ginger',
    age: 1,
    fullname: function () {
        return 'Meow';
    }
}

console.log(student);
console.log(student2);
let arr = [student, student2, cat];

console.group('ARRAY');
arr.forEach(element => {
    console.log(element.fullname());

});
console.log('arr', arr);

console.groupEnd();


//console.log('hello ' + student.firstName + ' ' + student.lastName);
//console.log('hello ' + student2.firstName + ' ' + student2.lastName);
//printHelloWhenUserGetHome(student.firstName, student.lastName);


console.log(

    student.fullname()
);
printHelloWhenUserGetHome(student2.name, student2.lname);

