
var rgb1=document.querySelector("#rgb_1");
var rgb2=document.querySelector("#rgb_2");
var rgb3=document.querySelector("#rgb_3");
var rgb_value=[rgb1,rgb2,rgb3];
for(var i=0;i<3;i++)
{
    var color_value=random_color();
    rgb_value[i].textContent=Number(color_value);
    console.log("yes");
}

function random_color(){
    return Math.floor(Math.random()*266);
}
