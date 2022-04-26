// Definitions
window.onload = function() {
    let canvas = document.getElementById('hello-world-canvas');
    let context = canvas.getContext('2d');

    context.lineWidth = 5; // set line width
    context.strokeStyle = 'red';
    context.shadowColor = 'black';
    context.shadowOffsetX = 3;
    context.shadowOffsetY = 3;
    context.shadowBlur = 5;
    context.beginPath(); // reset context state
    context.moveTo(20, 20); // move to the XY coords, starting point of the line
    context.lineTo(200, 20); // move to the XY coords, starting point of the line
    context.stroke();

    context.beginPath(); // reset context state
    context.lineWidth = 5; // set line width
    context.strokeStyle = 'blue';
    context.shadowColor = 'black';
    context.shadowOffsetX = -3;
    context.shadowOffsetY = 3;
    context.shadowBlur = 5;
    context.moveTo(30, 30); // move to the XY coords, starting point of the line
    context.lineTo(200, 30); // move to the XY coords, starting point of the line
    context.stroke();

    context.beginPath(); // reset context state
    context.lineWidth = 5; // set line width
    context.strokeStyle = 'green';
    context.shadowColor = 'black';
    context.shadowOffsetX = 3;
    context.shadowOffsetY = -3;
    context.shadowBlur = 5;
    context.moveTo(40, 40); // move to the XY coords, starting point of the line
    context.lineTo(200, 40); // move to the XY coords, starting point of the line
    context.stroke();

    context.beginPath(); // reset context state
    context.lineWidth = 5; // set line width
    context.strokeStyle = 'yellow';
    context.shadowColor = 'black';
    context.shadowOffsetX = -3;
    context.shadowOffsetY = -3;
    context.shadowBlur = 5;
    context.moveTo(50, 50); // move to the XY coords, starting point of the line
    context.lineTo(200, 50); // move to the XY coords, starting point of the line
    context.stroke();
};