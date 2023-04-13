const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

// Draw a red rectangle
ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(200, 200, 150, 150);

// Draw a blue rectangle
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(130, 130, 150, 150);

ctx.fillRect(225, 25, 100, 100);
ctx.clearRect(245, 45, 60, 60);
ctx.strokeRect(250, 50, 50, 50);

// Path: canvas.js
ctx.fillStyle = "rgb(34,139,34)";
ctx.beginPath();
ctx.moveTo(400, 400);
ctx.lineTo(400, 450);
ctx.lineTo(350, 425);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "rgb(255,20,147)";
let offsetX = 300;
let offsetY = 50;
ctx.beginPath();
ctx.arc(offsetX + 75, offsetY + 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(offsetX + 110, offsetY + 75);
ctx.arc(offsetX + 75, offsetY + 75, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(offsetX + 65, offsetY + 65);
ctx.arc(offsetX + 60, offsetY + 65, 5, 0, Math.PI * 2, true); // Left eye
ctx.moveTo(offsetX + 95, offsetY + 65);
ctx.arc(offsetX + 90, offsetY + 65, 5, 0, Math.PI * 2, true); // Right eye
ctx.closePath();
ctx.stroke();

// Quadratic curves example
ctx.beginPath();
ctx.moveTo(75, 25);
ctx.quadraticCurveTo(25, 25, 25, 62.5);
ctx.quadraticCurveTo(25, 100, 50, 100);
ctx.quadraticCurveTo(50, 120, 30, 125);
ctx.quadraticCurveTo(60, 120, 65, 100);
ctx.quadraticCurveTo(125, 100, 125, 62.5);
ctx.quadraticCurveTo(125, 25, 75, 25);
ctx.stroke();

ctx.fillStyle = "rgb(255,20,147)";
roundedRect(ctx, 12, 12, 150, 150, 15);

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

// TODO: next
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#path2d_objects
