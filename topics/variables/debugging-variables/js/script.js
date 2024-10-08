/**
 * Debugging Variables
 * Pippin Barr
 * 
 * Displays a bug that moves across the screen.
 * 
 * 
 */

"use strict";

// The bug
const bug = {
    // Position and dimensions
    x: 250,
    y: -100,
    w: 20,
    h: 30,
    // Movement
    velocity: {
        x: 0,
        y: 12 // Starts moving down
    },
    // Colour
    fill: "#5C4033" // Dark brown
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Updates and draws the bug
*/
function draw() {
    background("#87CEEB"); // Sky blue

    moveBug();
    drawBug();
}

function moveBug() {
    bug.x += bug.velocity.x;
    bug.y += bug.velocity.y;
}

/**
 * Displays the bug with its six legs sticking out
 */
function drawBug() {
    // Body
    push();
    noStroke();
    fill(0);
    ellipse(bug.x, bug.y, bug.w, bug.h);
    pop();

    // Legs
    push();
    stroke(0);
    // Thicken the legs a bit
    strokeWeight(2);
    // Three lines horizontally across the body at different heights for the legs
    line(bug.x - bug.w, bug.y - bug.h / 4, bug.x + bug.w, bug.y - bug.h / 4);
    line(bug.x - bug.w, bug.y, bug.x + bug.w, bug.y);
    line(bug.x - bug.w, bug.y + bug.h / 4, bug.x + bug.w, bug.y + bug.h / 4);
    pop();
}