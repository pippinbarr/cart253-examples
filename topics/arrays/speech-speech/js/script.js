/**
 * Speech! Speech!
 * Pippin Barr
 * 
 * Interactive speech-playing interface!
 */

"use strict";

// The speech itself
const speech = ["Veni.", "Vidi.", "Vici.", "Sensi malum."];
// Which sentence in the speech to display
let speechIndex = 0;

/**
 * Create canvas
*/
function setup() {
    createCanvas(600, 100);
}

/**
 * Display the current line of the speech
*/
function draw() {
    background(0);

    // Get the current line of the speech
    let currentLine = speech[speechIndex];

    // Display the line
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();
}

/**
 * Advances the speech on a mouse click
 */
function mousePressed() {
    // Next line
    speechIndex = speechIndex + 1;
    // Handle the end of the speech
    if (speechIndex >= speech.length) {
        // Start over
        speechIndex = 0;
    }
}