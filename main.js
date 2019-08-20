
var squares=document.querySelectorAll(".square");
var colors=random_color_array(6);
var picked_color=pick_color();
var clicked_color;
var text_rgba=document.querySelector('h1');
text_rgba.textContent=picked_color;
function pick_color() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
// var squares=document.querySelectorAll(".square");
// var colors=random_color_array(6);
// var picked_color=pick_color();
// var clicked_color;
// var text_rgba=document.querySelector('h1');
// text_rgba.textContent=picked_color;
// function pick_color() {
//     var random = Math.floor(Math.random() * colors.length);
//     return colors[random];
// }

for(var j=0;j<squares.length;j++)
{
    squares[j].style.background=colors[j];

    squares[j].addEventListener("click",function(){
        clicked_color=this.style.background;
        if (clicked_color == picked_color) {
            alert("CORRECT");
            return;
        }
        else
            alert("TRY AGAIN");

    })
}
function random_color_array(num){

    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(random_color());
    }
    return arr;
}

function random_color(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

