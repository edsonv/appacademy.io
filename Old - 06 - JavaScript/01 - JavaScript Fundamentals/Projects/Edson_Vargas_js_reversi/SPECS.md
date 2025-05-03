# **Reversi: Javascript Style**

## **Learning Goals**
---
- Be able to reason about object-oriented Javascript
- Know the different ways that objects can interact with each other in JavaScript
- Be able to write modular code
  - Know how to manually test your code as you write it
- Be able to write a run-loop in JavaScript
- Know how to use duck typing to allow for both a HumanPlayer and a ComputerPlayer

Download the [skeleton](https://assets.aaonline.io/fullstack/javascript/projects/js_reversi/skeleton.zip?raw=true).

Read the entirety of the project description before starting!

## **Note**
---
You will notice some of the code has something like this at the top:
~~~javascript
if (typeof window === 'undefined'){
  var readline = require("readline");
  var Piece = require("./piece.js");
  var Board = require("./board.js");
}
~~~

If this doesn't make sense yet that is totally ok. You will learn more about it tomorrow. For now, make sure not to touch this code.
## **Before we start: Let's familiarize ourselves with Jasmine**
---
For this project we will be using Jasmine, which is the same testing framework that we will be using for our Javascript assessment. Your file tree will look like this:
~~~
- lib
- spec
- src
SpecRunner.hmtl
~~~

All you need to do to run and see the specs is open the `SpecRunner.html` file in your browser. You will see the failed specs immediately, but if you want to see all of them, click `Spec List` near the top. To re-run the specs, just refresh the page. If you open up your `src` folder you will see `board`, `game`, `piece` files. This is where you will be writing your code. We highly recommend writing your code in the order specified below.

### **Reversi: Part I**
---
- Write the [Reversi](http://en.wikipedia.org/wiki/Reversi) game.
- You probably want a `Piece`, `Board`, and `Game` class.
- You're going want to complete the specs in this order: 

1. Piece
    - `color`
    - `oppColor`
    - `flip`
    - `toString`

2. Board 
    - `_makeGrid` && `constructor` function for `Board`
    - `isValidPos`
    - `getPiece`
    - `isMine`
    - `isOccupied`
    - `_positionsToFlip`
    - `validMove`
    - `placePiece`
    - `validMoves`
    - `hasMove`
    - `isOver`

- The skeleton lays out the functions you will need to write. There are comments above each function which describes its functionality.
- Do not write any user interaction code yet. Your `Game` should have a method `placePiece(position, color)`.
  - In particular, don't add a run loop yet.
- A challenge is to write your code in a way that is _modular_ -- it should be broken up into small methods that you can individually test.

### **Reversi: Part II Bonus**
---
- Create Bill, the AI player from the demo, by creating an AIPlayer class that reads the board and makes its next move based on the current placement of pieces on the board