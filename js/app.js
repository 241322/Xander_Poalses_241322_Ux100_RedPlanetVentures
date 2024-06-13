function zoom() {
    document.body.style.zoom = "90%"
}

// Carousel
document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav">
            ${ buttonsHtml.join("") }
        </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // unselect all the items
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            button.forEach(button => button.classList.remove("carousel__button--selected"));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
        });
    });
    // auto select first item
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
});

function submitContactForm() 
{
    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const contactSubject = document.getElementById('contactSubject').value;
    alert(`Thank you, ${contactName}. We have received your message about: "${contactSubject}"`);
}


let counter = 0;
let cartCounter = 0;


// Mars
const marsValue = document.getElementById('mars-value');
const incrementMars = document.getElementById('increment-mars');
const decrementMars = document.getElementById('decrement-mars');

incrementMars.addEventListener('click', () => {
    counter++;
    marsValue.innerHTML = counter;
});

decrementMars.addEventListener('click', () => {

    counter--;
    marsValue.innerHTML = counter;
});


// Neptune
const neptuneValue = document.getElementById('neptune-value');
const incrementNeptune = document.getElementById('increment-neptune');
const decrementNeptune = document.getElementById('decrement-neptune');

incrementNeptune.addEventListener('click', () => {
    counter++;
    neptuneValue.innerHTML = counter;
});

decrementNeptune.addEventListener('click', () => {
    counter--;
    neptuneValue.innerHTML = counter;
})


// Jupiter
const jupiterValue = document.getElementById('jupiter-value');
const incrementJupiter = document.getElementById('increment-jupiter');
const decrementJupiter = document.getElementById('decrement-jupiter');

incrementJupiter.addEventListener('click', () => {
    counter++;
    jupiterValue.innerHTML = counter;
});

decrementJupiter.addEventListener('click', () => {
    counter--;
    jupiterValue.innerHTML = counter;
})


// Saturn
const saturnValue = document.getElementById('saturn-value');
const incrementSaturn = document.getElementById('increment-saturn');
const decrementSaturn = document.getElementById('decrement-saturn');

incrementSaturn.addEventListener('click', () => {
    counter++;
    saturnValue.innerHTML = counter;
});

decrementSaturn.addEventListener('click', () => {
    counter--;
    saturnValue.innerHTML = counter;
});



// Uranus
const uranusValue = document.getElementById('uranus-value');
const incrementUranus = document.getElementById('increment-uranus');
const decrementUranus = document.getElementById('decrement-uranus');

incrementUranus.addEventListener('click', () => {
    counter++;
    uranusValue.innerHTML = counter;
});

decrementUranus.addEventListener('click', () => {
    counter--;
    uranusValue.innerHTML = counter;
});




// Moon
const moonValue = document.getElementById('moon-value');
const incrementMoon = document.getElementById('increment-moon');
const decrementMoon = document.getElementById('decrement-moon');

incrementMoon.addEventListener('click', () => {
    counter++;
    moonValue.innerHTML = counter;
});

decrementMoon.addEventListener('click', () => {
    counter--;
    moonValue.innerHTML = counter;
});





//change cart number display
const cartAmount = document.getElementById('cartAmount');

const addUpMars = document.getElementById('book-mars');
const addUpNeptune = document.getElementById('book-neptune');
const addUpJupiter = document.getElementById('book-jupiter');
const addUpSaturn = document.getElementById('book-saturn');
const addUpUranus = document.getElementById('book-uranus');
const addUpMoon = document.getElementById('book-moon');

addUpMars.addEventListener('click', () => {
    cartCounter++;
    cartAmount.innerHTML = cartCounter;
});

addUpNeptune.addEventListener('click', () => {
    cartCounter++;
    cartAmount.innerHTML = cartCounter;
});

addUpJupiter.addEventListener('click', () => {
    cartCounter++;
    cartAmount.innerHTML = cartCounter;
});

addUpSaturn.addEventListener('click', () => {
    cartCounter++;
    cartAmount.innerHTML = cartCounter;
});

addUpUranus.addEventListener('click', () => {
    cartCounter++;
    cartAmount.innerHTML = cartCounter;
});

addUpMoon.addEventListener('click', () => {
    cartCounter++;
    cartAmount.innerHTML = cartCounter;
});





// function decreaseMars(){
//     if(document.getElementById('ticketsMars').value != 0){
//         document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) -1;
//     } else {
//         document.getElementById('ticketsMars').value = 0;
//     }
// }


// function increaseMars(){
//     document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) + 1;
// }

// this Js is for the quantity counter on the flights page to adjust how many tickets the user wants to buy, but at the moment it only works on "The Classic Mars Experience" because I used .getElementById because I am struggling to figure out how to make it work with classes instead of IDs  

let mars = "R " + 25000;
let neptune = "R " + 45000;
let jupiter = "R " + 65000;
let saturn = "R " + 40000;
let uranus = "R " + 50000;
let moon = "R " + 15000;
//this is the value of each of the tickets put into their individual variables


function search_planet() {
    let input = document.getElementById('searchBar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('planets');

    for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
    }
    else {
        x[i].style.display = "list-item";
    }
    }
}



// Carousel
document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav">
            ${ buttonsHtml.join("") }
        </div>
    `);
});