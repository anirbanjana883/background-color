

// approach : event bubbling 

const root=document.getElementById("root");
root.addEventListener('click',(event)=>{
    console.log(event.target.id); // parent element will know which child elemet is trigerred
    document.body.style.backgroundColor=event.target.id;
});