// Definitions
window.onload = function() {
    let canvas = document.getElementById('hello-world-canvas');
    let context = canvas.getContext('2d');

    // context.rect(x, y, width, height)
    context.strokeStyle = 'red';
    context.lineWidth = 11;
    context.lineJoin = 'round';
    context.fillStyle = 'blue';
    context.rect(50, 200, 200, 200);
    context.stroke();
    context.fill();

    // context.fillRect(x, y, width, height)
    context.fillStyle = 'green';
    context.fillRect(300, 200, 200, 200);

    // context.strokeRect(x, y, width, height)
    context.lineWidth = 3;
    context.strokeStyle = 'blue';
    context.lineJoin = 'square';
    context.strokeRect(550, 200, 200, 200);

    // context.clearRect(x, y, width, height)
    context.clearRect(0, 00, 900, 600); // clear the entire canvas
};