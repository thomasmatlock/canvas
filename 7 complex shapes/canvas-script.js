// Definitions
window.onload = function() {
    let canvas = document.getElementById('hello-world-canvas');
    let context = canvas.getContext('2d');

    /*
  lineCap = butt|round|square
  lineJoin = bevel|round|miter
  shadowColor = color of shadow
  shadowBlur = 	blur amount of shadows
  shadowOffsetX	= horizontal distance of the shadow from the shape
  shadowOffsetY	= vertical distance of the shadow from the shape
  */

    // 1st Z object
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineCap = 'butt';
    context.lineJoin = 'bevel';
    context.shadowColor = 'black';
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 10;
    context.lineWidth = 15;
    context.moveTo(60, 80);
    context.lineTo(160, 80);
    context.lineTo(80, 180);
    context.lineTo(180, 180);
    context.stroke();

    // 2nd Z object
    context.beginPath();
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = 'blue';
    context.lineWidth = 15;
    context.shadowColor = 'black';
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 10;
    context.moveTo(340, 80);
    context.lineTo(240, 80);
    context.lineTo(340, 180);
    context.lineTo(240, 180);
    context.stroke();

    // 3rd Z object
    context.beginPath();
    context.lineCap = 'square';
    context.lineJoin = 'miter';
    context.strokeStyle = 'yellow';
    context.shadowColor = 'black';
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 10;
    context.lineWidth = 15;
    context.moveTo(420, 80);
    context.lineTo(520, 80);
    context.lineTo(440, 180);
    context.lineTo(540, 180);
    context.stroke();
};