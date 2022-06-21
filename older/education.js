//     To call an image to the canvas
//     var img = new Image();
//     img.src = 'beeple.jpg';
//     img.onload = function()
//     {
//     context.drawImage(img, 0, 0, 600, 400);
//     context.imageSmoothingEnabled = false;
// }
//     var canvas = document.getElementById("canvas");
//     var context = canvas.getContext("2d");
//     //For line
//     // context.moveTo(0, 0);
//     // context.lineTo(600, 400);
//     // context.stroke();

//     //For rectangle showing the fill styles.
//     // context.beginPath();
//     // context.rect(50, 50, 200, 150);

//     // context.fillStyle = "green";
//     // context.fill();

//     // context.lineWidth = 10;
//     // context.strokeStyle = "red";
//     // context.stroke();

//     //For arc/circle with grey outline and red body
//     context.beginPath();
//     context.arc(300, 200, 100, 0, 2 * Math.PI);

//     context.fillStyle = "#de4646";
//     context.fill();

//     context.lineWidth = 6;
//     context.strokeStyle = "#505050";
//     context.stroke();

//     //For adding words in the canvas
//     context.beginPath();
//     context.font = '42px Arial';
//     context.fillStyle = 'blue';
//     context.strokeStyle = "magenta";
//     context.strokeText("Hello World", 200, 100);
//     context.fillText("Hello World", 200, 100);
//     context.fill()
// var canvas = document.getElementById("canvas");
// var context = canvas.getContext("2d");
// var size = 50;
// var step = 10;

//To draw a rectangle at a coordinate and make it loop from the left side of the canvas
//To make a circle grow big and small at intervals
// function draw() {
//     context.clearRect(0, 0, 600, 400);
    
//     context.beginPath();
//     context.arc(300, 200, size, 0, 2*Math.PI);
//     context.fillStyle="red";
//     context.fill();
//     context.font = '25px Arial';
//     context.fillStyle = 'white';
//     context.fillText("Count: " + count, 20, 30);

//     size += step;
//     if (size >= 150 || size <= 50) {
//         step *= -1;
//     }
// }
// window.requestAnimationFrame(draw);
// context.moveTo(100, 100);
// context.lineTo(50, 200);
// context.lineTo(150, 200);
// context.lineTo(100, 100);
// context.stroke();


//wahala for me oh jajajaja.
//     To call an image to the canvas
//     var img = new Image();
//     img.src = 'beeple.jpg';
//     img.onload = function()
//     {
//     context.drawImage(img, 0, 0, 600, 400);
//     context.imageSmoothingEnabled = false;
// }
//     var canvas = document.getElementById("canvas");
//     var context = canvas.getContext("2d");
//     //For line
//     // context.moveTo(0, 0);
//     // context.lineTo(600, 400);
//     // context.stroke();

//     //For rectangle showing the fill styles.
//     // context.beginPath();
//     // context.rect(50, 50, 200, 150);

//     // context.fillStyle = "green";
//     // context.fill();

//     // context.lineWidth = 10;
//     // context.strokeStyle = "red";
//     // context.stroke();

//     //For arc/circle with grey outline and red body
//     context.beginPath();
//     context.arc(300, 200, 100, 0, 2 * Math.PI);

//     context.fillStyle = "#de4646";
//     context.fill();

//     context.lineWidth = 6;
//     context.strokeStyle = "#505050";
//     context.stroke();

//     //For adding words in the canvas
//     context.beginPath();
//     context.font = '42px Arial';
//     context.fillStyle = 'blue';
//     context.strokeStyle = "magenta";
//     context.strokeText("Hello World", 200, 100);
//     context.fillText("Hello World", 200, 100);
//     context.fill()
// var canvas = document.getElementById("canvas");
// var context = canvas.getContext("2d");
// var size = 50;
// var step = 10;

//To draw a rectangle at a coordinate and make it loop from the left side of the canvas
//To make a circle grow big and small at intervals
// function draw() {
//     context.clearRect(0, 0, 600, 400);
    
//     context.beginPath();
//     context.arc(300, 200, size, 0, 2*Math.PI);
//     context.fillStyle="red";
//     context.fill();
//     context.font = '25px Arial';
//     context.fillStyle = 'white';
//     context.fillText("Count: " + count, 20, 30);

//     size += step;
//     if (size >= 150 || size <= 50) {
//         step *= -1;
//     }
// }
// window.requestAnimationFrame(draw);
// context.moveTo(100, 100);
// context.lineTo(50, 200);
// context.lineTo(150, 200);
// context.lineTo(100, 100);
// context.stroke();