var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(120, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(280, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(200, 160, 95, 0.9 * Math.PI, 0.1 * Math.PI);
ctx.stroke();
ctx.moveTo(140, 170);
ctx.bezierCurveTo(110, 115, 150, 45, 200, 80);
ctx.stroke();
ctx.moveTo(260, 170);
ctx.bezierCurveTo(285, 115, 255, 45, 200, 80);
ctx.stroke();
ctx.moveTo(140, 170);
ctx.bezierCurveTo(90, 170, 90, 250, 177, 260);
ctx.stroke();
ctx.moveTo(260, 170);
ctx.bezierCurveTo(310, 170, 310, 250, 222, 260);
ctx.stroke();
ctx.moveTo(160, 240);
ctx.quadraticCurveTo(200, 300, 240, 240);
ctx.stroke();
ctx.moveTo(170, 230);
ctx.quadraticCurveTo(200, 285, 230, 230);
ctx.stroke();
ctx.moveTo(140, 210);
ctx.bezierCurveTo(170, 245, 230, 245, 258, 210);
ctx.stroke();
ctx.moveTo(180, 245);
ctx.quadraticCurveTo(190, 240, 205, 248);
ctx.stroke();
ctx.moveTo(200, 245);
ctx.quadraticCurveTo(210, 240, 219, 248);
ctx.stroke();
ctx.beginPath();
ctx.arc(300, 402, 250, 1.27 * Math.PI, 1.29 * Math.PI);
ctx.stroke();
ctx.moveTo(247, 205);
ctx.quadraticCurveTo(260, 210, 265, 220);
ctx.stroke();
ctx.beginPath();
// nose
// scale context horizontally
ctx.scale(1.8, 1.2);
// draw circle which will be stretched into an oval
ctx.beginPath();
ctx.arc(112, 163, 13, 0, 2 * Math.PI, false);
ctx.stroke();
ctx.moveTo(100, 145);
ctx.quadraticCurveTo(112, 135, 125, 145);
ctx.stroke();
// eyes
ctx.scale(0.18, 1);
ctx.beginPath();
ctx.arc(580, 111, 30, 0, 2 * Math.PI, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(665, 111, 30, 0, 2 * Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(585, 132, 10, 0, 2 * Math.PI, false);
ctx.fill();
ctx.beginPath();
ctx.arc(662, 132, 10, 0, 2 * Math.PI, false);
ctx.fill();

// text

// Shadows
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 4;
ctx.shadowBlur = 39;
ctx.shadowColor = 'black';

ctx.font = '50px Helvetica';
ctx.fillStyle = 'red';
ctx.scale(2, 1);
ctx.textAlign = 'center';
ctx.fillText('Mickey Mouse!', 300, 300);
ctx.strokeText('Mickey Mouse!', 300, 300);
