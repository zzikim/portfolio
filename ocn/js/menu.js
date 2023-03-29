var datas;
function win(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }
}
function file(){
    if(datas.readyState==XMLHttpRequest.DONE && datas.status==200){
        menus(JSON.parse(this.response));
    }
}

datas = win();
datas.onreadystatechange = file;
datas.open("get","./json/menu.json",true);
datas.send();

var mn = document.getElementById("mn");

function gogo(linkss){
                location.href = linkss
            }

function menus(data){
    var html_li, html_ol;
    data.forEach(function(a,b,c){
        html_li = document.createElement("li");
        html_li.innerText = a.main_menu;
        html_li.title = a.main_menu;
        var mli = mn.childNodes;
        
        html_ol = document.createElement("ol");
        html_ol.id = "smn"+b
        a.menu_list.forEach(function(a1,b1,c1){    
            html_ol.innerHTML += `<li onclick = "gogo('`+a.menu_link[b1]+`')">`+a1+`</li>`

    })
    html_li.append(html_ol)
    mn.append(html_li);


        
        function mover(){
        mli[b+1].addEventListener("mouseover",function(){
        document.getElementById("smn"+b).style.display="block"
        })}
        
        function mout(){
            mli[b+1].addEventListener("mouseout",function(){
            document.getElementById("smn"+b).style.display="none"
            })}


        mover();
        mout();

        

    })
}


