// approach 1 :

// const red=document.getElementById('red');
// const blue=document.getElementById('blue');
// const orange=document.getElementById('orange');
// const green=document.getElementById('green');
// const purple=document.getElementById('purple');
// // access of the body 
// const body=document.querySelector('body');

// red.addEventListener('click',()=>{
//     body.style.backgroundColor='red';
// });

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor='blue';
// });

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor='orange';
// });

// green.addEventListener('click',()=>{
//     body.style.backgroundColor='green';
// });

// purple.addEventListener('click',()=>{
//     body.style.backgroundColor='purple';
// });


// approach 2 :

// const buttons =document.querySelectorAll('button');
// const body = document.body;

// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         // console.log(button.id); // we are getting each button id 
//         body.style.backgroundColor=button.id;
//     });
// });


// approach 3: event bubbling 

const root=document.getElementById("root");
root.addEventListener('click',(event)=>{
    console.log(event.target.id); // parent element will know which child elemet is trigerred
    document.body.style.backgroundColor=event.target.id;
});