const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee {
    size;
    isDecaf;

    constructor(size, isDecaf){
        this.size = size;
        this.isDecaf = isDecaf;
    }
    serveIt(){
        let cup = document.createElement("img");
        

        cup.setAttribute("src", "images/coffee-cup.svg");
        cup.setAttribute("alt", "A Coffee Image");
        console.log(cup);

        if(this.isDecaf){
             cup.setAttribute("src", "images/coffee-cup-green.svg");
        } else {
             cup.setAttribute("src", "images/coffee-cup-purple.svg");
        }
        switch (this.size){
            case "small" :
                cup.setAttribute("height", "100");
                break;
            case "medium" :
                 cup.setAttribute("height", "150");
                 break;
            case "large" :
                 cup.setAttribute("height", "200");
                 break;
            default :
                 cup.setAttribute("height", "150");
        }
        cup.setAttribute("title", `A ${this.size} sized coffee!`);
        output.appendChild(cup);
    }
}
/* STEP 2: Instatiate a coffee based on the above constructor function */
let aliceCoffee = new Coffee ("medium", false);
let robertCoffee = new Coffee("large", true);
let meganCoffee = new Coffee ("small", false);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */
aliceCoffee.serveIt();
robertCoffee.serveIt();
meganCoffee.serveIt();
/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee{
    milkType;
    constructor(size, isDecaf, milkType){
        super(size, isDecaf);
        this.milkType = milkType;
    }
    latteDesc(){
        alert (`A ${this.size} sized Latte with ${this.milkType} milk`);
    }
}
/* STEP 6: Create a new instance of the Latte object */
let aliceLatte = new Latte ("medium", false, "2%");
/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
