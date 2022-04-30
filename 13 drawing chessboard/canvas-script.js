// Definitions
window.onload = function() {
    let canvas = document.getElementById('hello-world-canvas');
    let context = canvas.getContext('2d');

    // Chessboard colors
    let lightCellColor = '#ddb180';
    let darkCellColor = '#7c330c';

    // Chessboard frame
    context.strokeStyle = 'black';
    context.strokeRect(250, 100, 400, 400);

    // WOW! fastest most efficient way to do this
    // for (let row = 0; row < 8; row++) {
    //     for (let column = 0; column < 8; column++) {
    //         let cellColor = (row + column) % 2 === 0 ? lightCellColor : darkCellColor;
    //         context.fillStyle = cellColor;
    //         context.fillRect(250 + column * 50, 100 + row * 50, 50, 50);
    //     }
    // }

    for (let x = 1; x <= 8; x++) {
        for (let y = 1; y <= 8; y++) {
            if ((x + y) % 2 == 0) {
                context.fillStyle = darkCellColor;
            } else {
                context.fillStyle = lightCellColor;
            }
            context.fillRect(200 + x * 50, 50 + y * 50, 50, 50);
        }
    }

    // FASTER WAY TO FILL CELLS, BUT STILL USES 8 FOR LOOPS
    // //  1ST ROW
    // for (let i = 1; i <= 8; i++) {
    //     if (i % 2 === 0) {
    //         context.fillStyle = darkCellColor;
    //     } else {
    //         context.fillStyle = lightCellColor;
    //     }
    //     context.fillRect(200 + i * 50, 100, 50, 50);
    // }
    // //  2ND ROW
    // for (let i = 1; i <= 8; i++) {
    //     if (i % 2 === 1) {
    //         context.fillStyle = darkCellColor;
    //     } else {
    //         context.fillStyle = lightCellColor;
    //     }
    //     context.fillRect(200 + i * 50, 150, 50, 50);
    // }
    // //  3RD ROW
    // for (let i = 1; i <= 8; i++) {
    //     if (i % 2 === 0) {
    //         context.fillStyle = darkCellColor;
    //     } else {
    //         context.fillStyle = lightCellColor;
    //     }
    //     context.fillRect(200 + i * 50, 200, 50, 50);
    // }

    // TEDIOUS MANUAL WAY TO FILL CELLS
    // // Cell 1
    // context.fillStyle = lightCellColor;
    // context.fillRect(250, 100, 50, 50);
    // // Cell 2
    // context.fillStyle = darkCellColor;
    // context.fillRect(300, 100, 50, 50);

    // // Cell 3
    // context.fillStyle = lightCellColor;
    // context.fillRect(350, 100, 50, 50);
    // // Cell 4
    // // Cell 2
    // context.fillStyle = darkCellColor;
    // context.fillRect(400, 100, 50, 50);
};