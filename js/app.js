let counter = 0;



const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
})
// this Js is for the quantity counter on the flights page to adjust how many tickets the user wants to buy, but at the moment it only works on "The Classic Mars Experience" because I used .getElementById because I am struggling to figure out how to make it work with classes instead of IDs  

let mars = "R " + 25000
let neptune = "R " + 45000
let jupiter = "R " + 65000
let saturn = "R " + 40000
let uranus = "R " + 50000
let moon = "R " + 15000
//this is the value of each of the tickets put into their individual variables