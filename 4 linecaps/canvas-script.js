// Definitions
window.onload = function() {
    let canvas = document.getElementById('hello-world-canvas');
    let context = canvas.getContext('2d');

    // LINE 1
    context.beginPath(); // reset context state
    context.lineCap = 'butt';
    context.strokeStyle = 'red'; // set line color
    contextLineWidth = 10; // set line width
    context.moveTo(100, 100); // move to the XY coords, starting point of the line
    context.lineTo(250, 100); // move to the
    context.stroke(); // draw the line

    // LINE 2
    context.beginPath(); // reset context state
    context.lineCap = 'round';
    context.strokeStyle = 'blue'; // set line color
    contextLineWidth = 10; // set line width
    context.moveTo(100, 125); // move to the XY coords, starting point of the line
    context.lineTo(250, 125); // move to the
    context.stroke(); // draw the line

    // LINE 3
    context.beginPath(); // reset context state
    context.lineCap = 'square';
    context.strokeStyle = 'green'; // set line color
    contextLineWidth = 10; // set line width
    context.moveTo(100, 150); // move to the XY coords, starting point of the line
    context.lineTo(250, 150); // move to the
    context.stroke(); // draw the line
};