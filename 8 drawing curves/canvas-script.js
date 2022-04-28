// Definitions
window.onload = function() {
    let canvas = document.getElementById('hello-world-canvas');
    let context = canvas.getContext('2d');

    let radians = Math.PI / 180;

    // 1st arc
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.arc(100, 100, 50, 0 * radians, 180 * radians, false); // 4 args, x, y, radius, start angle...also true is clockwise, false counter clockwise
    context.stroke();

    // 2nd arc
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 10;
    context.arc(300, 200, 50, 45 * radians, 130 * radians, false); // 4 args, x, y, radius, start angle...also true is clockwise, false counter clockwise
    context.stroke();

    // 3rd arc
    context.beginPath();
    context.strokeStyle = 'green';
    context.lineWidth = 10;
    context.arc(300, 100, 50, 45 * radians, 130 * radians, true); // 4 args, x, y, radius, start angle...also true is clockwise, false counter clockwise
    context.stroke();
};