// Definitions
window.onload = function() {
    let canvas = document.getElementById('hello-world-canvas');
    let context = canvas.getContext('2d');

    context.beginPath(); // reset context state
    context.strokeStyle = 'blue'; // set line color
    context.lineWidth = 10; // set line width
    context.moveTo(30, 70); // move to the XY coords, starting point of the line
    context.lineTo(70, 70); // draw a line to the XY coords, ending point of the line
    context.stroke(); // draw the line
};