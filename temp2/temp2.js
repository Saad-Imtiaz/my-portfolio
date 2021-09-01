
// Selector - Single Element Selector
// DOM Document Object Model 
const form = document.getElementById('my-form');
console.log(document.querySelector('.container'));
console.log(form);

// Selector - Multiple Element Selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const item = document.querySelectorAll('.item');
item.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Yo Man';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h3>hello</h3>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// Check MDN website for checking out differnet events

/* btn.addEventListener('click', (e) => {
    e.preventDefault(); // prevents from reload
    console.log(e);
    console.log('click');
    console.log(e.target);
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';

    document.querySelector('body').classList.add('bg-dark');

    document.querySelector('.items').lastElementChild.innerHTML = '<h1> <font color="black"> Hello</font></h1>';
}); */


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{ 
    e.preventDefault();
    console.log(nameInput.value);

    if (nameInput.value === '' || emailInput.value === '')
    { 
        msg.classList.add('error');
        //alert('Please enter all feilds');
        msg.innerHTML = 'Please enter all feilds';
        setTimeout(() =>  msg.remove(), 3000);
    }
    else { 
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
  userList.appendChild(li);

  //Clear feilds
  nameInput.value = '';
  emailInput.value = '';
    }
}



