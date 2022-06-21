window.onload() = function(){
    let btn = document.getElementById("jump");
    let count = 0;

    btn.onclick = function(){
        count += 1
    }

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.BeginPath();
    context.arc(300, 200, 100, 0, 2 * Math.PI);
}
