// Definitions
window.onload = function() {
    let canvas = document.getElementById('hello-world-canvas');
    let context = canvas.getContext('2d');

    // miter
    context.beginPath(); // reset context state
    context.lineWidth = 20; // set line width
    context.lineJoin = 'miter'; //
    context.moveTo(30, 30); // move to the XY coords, starting point of the line
    context.lineTo(130, 30); // move to the XY coords, starting point of the line
    context.lineTo(130, 130); // move to the XY coords, starting point of the line
    context.lineTo(30, 130); // move to the XY coords, starting point of the line
    context.lineTo(30, 30); // move to the XY coords, starting point of the line
    context.stroke(); // stroke

    // bevel
    context.beginPath(); // reset context state
    context.lineJoin = 'bevel'; //
    context.strokeStyle = 'red'; // set line color
    context.lineWidth = 20; // set line width
    context.moveTo(60, 60); // move to the XY coords, starting point of the line
    context.lineTo(160, 60); // move to the XY coords, starting point of the line
    context.lineTo(160, 160); // move to the XY coords, starting point of the line
    context.lineTo(60, 160); // move to the XY coords, starting point of the line
    context.lineTo(60, 60); // move to the XY coords, starting point of the line
    context.stroke(); // stroke

    // round
    context.beginPath(); // reset context state
    context.lineJoin = 'round'; //
    context.strokeStyle = 'blue'; // set line color
    context.lineWidth = 20; // set line width
    context.moveTo(90, 90); // move to the XY coords, starting point of the line
    context.lineTo(190, 90); // move to the XY coords, starting point of the line
    context.lineTo(190, 190); // move to the XY coords, starting point of the line
    context.lineTo(90, 190); // move to the XY coords, starting point of the line
    context.lineTo(90, 90); // move to the XY coords, starting point of the line
    context.stroke(); // stroke
};