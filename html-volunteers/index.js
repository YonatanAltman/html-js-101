

let volunteeObject = {
    name: '',
    desc: '',
    population: '',
    dayOfTheweek: '',
    hourInTheDay: '',
    address: '',
    email: ''
}

let list = [];


console.log(volunteeObject);

let addBtn = document.getElementById('add');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let value = getAllVoluteerData();
    console.log('value', value);
    list.push(value);
    addRowToTable(list.length, value);
});



function getAllVoluteerData() {
    let name = document.getElementById('name').value;
    let desc = document.getElementById('desc').value;
    let population = document.getElementById('population').value;
    let dayOfTheweek = document.getElementById('dayOfTheweek').value;
    let hourInTheDay = document.getElementById('hourInTheDay').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;

    let volunteer = {
        name,
        desc,
        population,
        dayOfTheweek,
        hourInTheDay,
        address,
        email,
    }


    return volunteer;
}

function addRowToTable(index, value) {
    var table = document.getElementById("tbody");
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(-1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    row.insertCell(0).innerText = index;
    row.insertCell(1).innerText = value.name;
    row.insertCell(2).innerText = value.desc;
    row.insertCell(3).innerText = value.population;
    row.insertCell(4).innerText = value.dayOfTheweek;
    row.insertCell(5).innerText = value.hourInTheDay;
    row.insertCell(6).innerText = value.address;
    row.insertCell(7).innerText = value.email;


}