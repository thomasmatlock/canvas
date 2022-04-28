// Definitions
window.onload = function() {
    let canvas = document.getElementById('hello-world-canvas');
    let context = canvas.getContext('2d');

    // bezier curves have 2 control points rather than one
    // begin by defining begin and ending points
    // then 2 control points
    // context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.moveTo(200, 250);
    context.bezierCurveTo(200, 100, 100, 100, 400, 250);
    context.stroke();
};