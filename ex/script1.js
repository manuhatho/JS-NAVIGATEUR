

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const response = document.querySelector('p')

btn1.addEventListener
('click', ()=> {
    btn1.style.background = 'green';
    response.style.background = 'green';
    response.style.visibility = 'visible';
    console.log('click sur le bouton Berne');
})
btn2.addEventListener
('click', ()=> {
    btn2.style.background = 'red';
    response.style.background = 'red';
    response.style.visibility = 'visible';
    console.log('click sur le bouton Znisch');

})
