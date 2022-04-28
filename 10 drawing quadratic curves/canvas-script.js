// Definitions
window.onload = function() {
    let canvas = document.getElementById('hello-world-canvas');
    let context = canvas.getContext('2d');

    // context.quadraticCurveTo(cpx, cpy, x, y)

    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.moveTo(200, 250);
    context.quadraticCurveTo(500, 10, 400, 250);
    context.stroke();
};