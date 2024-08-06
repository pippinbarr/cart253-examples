/**
 * Debugging Instructions
 * Pippin Barr
 * 
 * Displays a bug.
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Displays a bug on a pink background
*/
function draw() {
    // Pink background
    background(255, 150, 135);

    // Draw the bug
    drawBug();
}

function drawBug() {
    // Body
    push();
    noStroke();
    fill(0);
    ellipse(250, 250, 200, 300);
    pop();

    // Legs
    push();
    stroke(0);
    strokeWeight(10);
    line(100, 200, 400, 200);
    line(100, 250, 400, 250);
    line(100, 300, 400, 300);
    pop();

    // Antennae
    push();
    stroke(0);
    strokeWeight(5);
    line(250, 250, 200, 50);
    line(250, 250, 300, 50);
    pop();

    // Eyes
    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(200, 150, 15);
    ellipse(300, 150, 15);
    pop();
}