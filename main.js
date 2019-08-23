var result=document.querySelector(".result");
var reset=document.querySelector(".reset");
var squares=document.querySelectorAll(".square");
var colors=random_color_array(6);
var picked_color=pick_color();
var clicked_color;
var text_rgba=document.querySelector('h1');
text_rgba.textContent=picked_color;
var easy=document.querySelector('.easy');
var hard=document.querySelector('.hard');
easy.addEventListener("click",function(){
    var main_ans = [];
    var main_ans=random_color_array(2);
    
    for(var u=0;u<6;u++){
        
        if(squares[u].style.background==picked_color)
        {
            var ans=u;
            main_ans.push(squares[u].style.background);
        }
    }
    for(var p=0;p<6;p++){
        squares[p].style.display="none";
    }
    for(p=0;p<3;p++)
    {
        squares[p].style.background=main_ans[p];
        squares[p].style.display="inline";
    }
})
hard.addEventListener("click",function(){

    for(var r=0;r<6;r++){
        squares[r].style.display='inline';

    }
})
reset.addEventListener("click",function(){
    document.location.reload();
})
function pick_color() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

for(var j=0;j<squares.length;j++)
{
    squares[j].style.background=colors[j];

    squares[j].addEventListener("click",function(){
        clicked_color=this.style.background;
        if (clicked_color == picked_color) {
            swal("CORRECT!", "You nailed it!", "success");
            result.style.color = "blueviolet";
            result.style.fontWeight = 800;
            result.style.fontSize = '1.2rem';
            return;
        }
        else
        {
            result.textContent = "TRY AGAIN";
            result.style.color = "blueviolet";
            result.style.fontWeight = 800;
            result.style.fontSize = '1.2rem';
            this.style.background='white';
        }

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

