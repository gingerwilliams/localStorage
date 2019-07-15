const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('#item');


//Create an Empty Array
// let tasks = [];
let tasks;
localStorage.getItem('items') ? tasks = JSON.parse(localStorage.getItem('items')) : tasks = []

//Create localStorage key called 'items', value is the array as a string
localStorage.setItem('items', JSON.stringify(tasks));

//Get Items from local storage and parse back into an array
const data = JSON.parse(localStorage.getItem('items'));


// create list item
const liMaker = text => {
    const li = document.createElement('li');
    // console.log(li);
    li.textContent = text
    // console.log(li.textContent);
    ul.appendChild(li)
}

// apply text input value to list handleSubmit on enter
form.addEventListener('submit', e => {
    e.preventDefault();

    // push any new input value into the array
    tasks.push(input.value);

    //set the localStorage to the new, updated value
    localStorage.setItem('items', JSON.stringify(tasks));

    liMaker(input.value)
    input.value = '';
});

// loop through everything in our data variable, and run the liMaker() again to display all existing stored information
data.map(item => liMaker(item));

button.addEventListener('click', function () {

    //clear storage
    localStorage.clear();
    //To remove all children from an element:
    while (ul.firstChild)
        ul.removeChild(ul.firstChild);

    console.log('clear', localStorage);
})

//Our tasks Array is being reset to an empty array every time the script runs
// write a conditional statement that checks if localStorage already exists

