var data;
var array; 
function win(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }
}
function file(){
    if(data.readyState==XMLHttpRequest.DONE && data.status==200){
        array = JSON.parse(this.response)
        prin(JSON.parse(this.response));
    }
}

data = win();
data.onreadystatechange = file;
data.open("get","./json/new_program.json",true);
data.send();

var print = document.getElementById("print");

var no;
function prin(data){
    data.forEach(function(a,b,c){
        no = b+1
        if(no<=8){
        print.children[b].setAttribute("title",a.new_pg)
        print.children[b].style.backgroundImage="url("+a.new_thumb+")"
    }
    })

   }


   function mores(){
    var fir = print.children[0].getAttribute("title")
if(fir=="번외수사"){
    array.forEach(function(a,b,c){
        if(b>=8){
            no = b+1
            noo = b-8
        print.children[noo].setAttribute("title",a.new_pg)
        if(no<10){
        print.children[noo].style.transition="all 3s ease";
        print.children[noo].style.backgroundImage="url(./contents/thum_new0"+no+".png)"
    }
        else{
            print.children[noo].style.transition="all 3s ease";
            print.children[noo].style.backgroundImage="url(./contents/thum_new"+no+".png)"
        }
    }
    } )
    }

else{
    prin(array)
}}
