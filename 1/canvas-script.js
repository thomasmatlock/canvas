// Definitions
let canvas = document.getElementById('hello-world-canvas');
let context = canvas.getContext('2d');

// Blue rectangle
context.fillStyle = 'blue';
context.fillRect(10, 10, canvas.width, canvas.height); // 4 args, x, y, width, height

context.fillStyle = 'yellow';
context.fillRect(10, 10, 50, 50); // 4 args, x, y, width, height