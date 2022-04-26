// Definitions
window.onload = function() {
    let canvas = document.getElementById('hello-world-canvas');
    let context = canvas.getContext('2d');

    context.beginPath(); // reset context state
    context.moveTo(30, 30); // move to the XY coords, starting point of the line
    context.lineTo(80, 80); // draw a line to the XY coords, ending point of the line
    context.lineTo(130, 30); // draw a line to the XY coords, ending point of the line
    context.lineTo(180, 80); // draw a line to the XY coords, ending point of the line
    context.lineTo(230, 30); // draw a line to the XY coords, ending point of the line
    context.stroke(); // draw the line
};