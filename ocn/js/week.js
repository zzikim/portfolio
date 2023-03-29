var wek = document.getElementById("wek");
var ea = wek.children.length;
var w = 1;
while(w<ea){
    wek.children[w].style.backgroundImage = "url('./contents/b13_"+w+".png')";
    w++;
}