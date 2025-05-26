//I can select the first of type but need to specify that I'm getting the button only in the rest
const button1 = document.querySelector ("button:first-of-type");
const button2 = document.querySelector (".Button2 > button");
const button3 = document.querySelector (".Button3 > button");
const button4 = document.querySelector (".Button4 > button");
const button5 = document.querySelector (".Button5 > button");
//Creating variables for the button to cycle


let button1opt = ["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat" ];
let button2opt = ["Sat On", "Ate", "Danced With", "Saw", "Doesn't Like", "Kissed" ];
let button3opt = ["A Funny", "A Scary", "A Goofy", "A Slimy", "A Barking", "A Fat"];
let button4opt = ["Goat", "Monkey", "Fish", "Cow", "Frog", "Bug", "Worm"];
let button5opt = ["On The Moon", "On The Chair", "In My Spaghetti", "In My Soup", "On The Grass", "In My Shoes"];
//We are simply just putting the options that the user can see into Arrays to use later

let suprises = [];
let playback = [];

//Creating two empty arrays to use later (unsure if this is a good idea so far)
let iO = 0;
let iT = 0;
let iThr = 0;
let iF = 0;
let iFv = 0;
//We need to set different placeholder values for all five (done!)



//First BUTTON
function buttonOnes (){
    //Creating a function
iO++;
//Saying add to the function
if (iO >= button1opt.length){
    //If it becomes greater than the length it returns to zero
    iO = 0;
}

button1.textContent = button1opt[iO];
//Displays which one we are currently on in the array
}
button1.addEventListener("click", buttonOnes);
//Running the function when button 1 is clicked

//SECOND BUTTON
function buttonTwos (){
    //Same thing creating a function for button 2
iT++;
//Adding it everytime we hit the button
if (iT >= button2opt.length){
    //If it becomes greater than it returns to zero
    iT = 0;
}
button2.textContent = button2opt[iT];
//displays it in the button
}
button2.addEventListener("click", buttonTwos);
//Plays the function when the button is pressed.
  

//THIRD BUTTON
function buttonThrees (){
    //Same thing creating a function for button 3
iThr++;
//Adding it everytime we hit the button to cycle through
if (iThr >= button3opt.length){
    //If it becomes greater than or equal it returns to zero
    iThr = 0;
}
button3.textContent = button3opt[iThr];
//displays it in the button
}
button3.addEventListener("click", buttonThrees);
//Plays the function when the button is pressed.

// FOURTH BUTTOn
function buttonFours (){
    //Same thing creating a function for button 4
iF++;
//Adding it everytime we hit the button to the count
if (iF >= button4opt.length){
    //If it becomes greater than it returns to zero
    iF = 0;
}
button4.textContent = button4opt[iF];
//displays it in the button
}
button4.addEventListener("click", buttonFours);
//Plays the function when the button is pressed.
  

function buttonFives (){
    //Same thing creating a function for button 5
iFv++;
//Adding it everytime we hit the button
if (iFv >= button5opt.length){
    //If it becomes greater than it returns to zero
    iFv = 0;
}
button5.textContent = button5opt[iFv];
//displays it in the button
}
button5.addEventListener("click", buttonFives);
//Plays the function when the button is pressed.