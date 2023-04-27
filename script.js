const questionContainer = document.querySelector('.click-event')

questionContainer.style.border = "3px dashed red";
questionContainer.style.borderRadius = "10px";
questionContainer.style.border= "10px dashed pink";
questionContainer.addEventListener 
('click', ()=>{
    // console.log("click sur la zone de question")

// questionContainer.style.background='red';
// questionContainer.style.border= "10px dashed pink";
// questionContainer.style.borderRadius="50px";

//  questionContainer.classList.add('question-click');
 questionContainer.classList.toggle('question-click');

});

//  Pour pointer sur nos bouton

const btn1= document.querySelector('#btn-1');
const btn2= document.querySelector('#btn-2');
const response= document.querySelector("p")
// Ajouter un evenement au click
btn1.addEventListener(
    'click', ()=> {
        btn1.style.background = 'green';
        response.classList.add('show-response');
        response.style.background = 'green';
        console.log('clic sur le bouton Berne');
    });
btn2.addEventListener(
    'click', ()=> {
        btn2.style.background = 'red';
        response.classList.add('show-response');
        response.style.background = 'red'
        console.log('clic sur le bouton Znisch');
    });

    const mousemove= document.querySelector('.mousemove');
    // mousemove.addEventListener

    // ('mousemove',
    //  ()=>{
    // console.log('mousemove');
    // })
    window.addEventListener

    ('mousemove',
     (e)=>{
       mousemove.style.left = e.pageX+ "px";
       mousemove.style.top = e.pageY+ "px";
    // console.log(e);
    })

    window.addEventListener('mousedown',
     ()=>{
        mousemove.style.transform = "scale(2) translate (-50% -50%)";
    })
    window.addEventListener('mouseup',
     ()=>{
        mousemove.style.transform = "scale(1) translate (-50% -50%) ";
    })
//    Mouseenter (quand la souris survole une zone)
    questionContainer.addEventListener("mouseenter", ()=>{
        questionContainer.style.background= "rgba (0,0,0,0.4)";
        // console.log('zone survolé');
    })
//    Mouseout (lorsqu'on sort de la zone)
    questionContainer.addEventListener
    ("mouseout", ()=>{
        questionContainer.style.background="red";
        // console.log('outzone');
    });

//    Mouseover (lorsqu'on survole)
    response.addEventListener(
        "mouseover", ()=>{
            response.style.transform="rotate(1deg)";
            // console.log('survole');
        });

// Keypress Event

const KeypressContainer = document.querySelector(
    ".keypress");
const Key = document.getElementById("key");
    document.addEventListener
    ("keypress", (e)=>{
        
        key.textContent = e.key;
        key.style.color = "white";
        if (e.key==="z"){
           
            KeypressContainer.style.background = "blue";

        } else if (e.key==="b"){
           
            KeypressContainer.style.background = "orange";
            
        } else {
            KeypressContainer.style.background = "yellow";
        }
        console.log(e.key);

    })

    const menu = document.getElementById("menu");
    window.addEventListener(
        "scroll", ()=>{
            console.log(window.scrollY);
            if(window.scrollY>100){
            menu.style.top= '0px';
        } else {
            menu.style.top= "-70px";
        }
    });


    






