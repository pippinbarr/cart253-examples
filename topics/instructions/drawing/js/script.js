/**
 * The Greatest Record of All Time
 * Pippin Barr
 * 
 * Displays the Greatest Record of All Time
 */

"use strict";

/**
 * Creates a square canvas
*/
function setup() {
    createCanvas(640, 640);
}

/**
 * Displays the record
*/
function draw() {
    // Grey background
    background(150);

    // The main part of the record
    push();
    fill(255, 0, 0);
    stroke(255);
    ellipse(320, 320, 480);
    pop();

    // The label on the record
    push();
    fill("white");
    noStroke();
    ellipse(320, 320, 140);
    pop();

    // The hole in the record
    push();
    fill("#000000");
    noStroke();
    ellipse(320, 320, 20);
    pop();
}