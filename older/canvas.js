//To add buttons and move the rectangle across different sides
window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    //for a random coin generator
    var coinx = Math.random() * (600-50); 
    var coiny = Math.random() * (400-50); 
    
    var t = Date.now();
    let speed = 300;
    let dir = 0;
    //for a random coin generator
    let score = 0;
    
    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    up.onmousedown = function() { dir = 4;}
    down.onmousedown = function() { dir = 3;}
    left.onmousedown = function() { dir = 2;}
    right.onmousedown = function() { dir = 1;}

    up.ontouchstart = function() { dir = 4;}
    down.ontouchstart = function() { dir = 3;}
    left.ontouchstart = function() { dir = 2;}
    right.ontouchstart = function() { dir = 1;}

    up.onmouseup = function() { dir = 0;}
    down.onmouseup = function() { dir = 0;}
    left.onmouseup = function() { dir = 0;}
    right.onmouseup = function() { dir = 0;}

    up.ontouchend = function() { dir = 0;}
    down.ontouchend = function() { dir = 0;}
    left.ontouchend = function() { dir = 0;}
    right.ontouchend = function() { dir = 0;}

    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        //var fps = Math.round(1 / timePassed);

        context.clearRect(0, 0, 600, 400);
        
        context.font = '25px Arial';
        context.fillStyle = 'black';
        context.fillText("Score: " + score, 20, 30);

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle="red";
        context.fill();

        context.beginPath();
        context.rect(coinx, coiny, 50, 50);
        context.fillStyle="yellow";
        context.fill();

        if(dir == 1) { 
            if(x+100 < 600) {
                x += (speed * timePassed);
            }
        }
        else if(dir == 2) { 
            if(x > 0) {
                x -= (speed * timePassed);
            }
        }
        else if(dir == 3) { 
            if(y+100 < 400) {
                y += (speed * timePassed);
            }
        }
        else if(dir == 4) { 
            if(y > 0) {
                y -= (speed * timePassed);
            }
        }
        //to make a random coin generator
        if (coinx <= x+100 && x <= coinx+50 && coiny <= y+100 && y <= coiny+50) {
            score++;
            coinx = Math.random() * (600-50);
            coiny = Math.random() * (400-50);
        } 
        window.requestAnimationFrame(draw);
    }
    draw();
}


// code to make the rectangle hit the edge and return
// window.onload = function() {
//     let btn = document.getElementById("jump");
//     let count = 0;

//     btn.onclick = function() {
//         count += 1;
//     }
//     var canvas = document.getElementById("canvas");
//     var context = canvas.getContext("2d");
//     var x = 0;
//     var y = 100;

//     var t = Date.now();
//     let speed = 100;
//     let dir = 1;
    
//     function draw() {
//         var timePassed = (Date.now() - t) / 1000;
//         t = Date.now();
//         var fps = Math.round(1 / timePassed);

//         context.clearRect(0, 0, 600, 400);
        
//         context.font = '25px Arial';
//         context.fillStyle = 'black';
//         context.fillText("FPS: " + fps, 20, 30);

//         context.beginPath();
//         context.rect(x, y, 100, 100);
//         context.fillStyle="red";
//         context.fill();
 
//         //To loop the rectangle
//         //x += (speed * timePassed);
//         // if (x >= 600) {
//         //     x = -100;
//         // }
//         //To make the rectangle hit the right edge and stop
//         x += dir*(speed * timePassed); 
//         if (x >= 600-100 || x <= 0) {
//             dir *= -1;
//         }
//         window.requestAnimationFrame(draw);
//         //setInterval(draw,50);
//     }
//     draw();
//}