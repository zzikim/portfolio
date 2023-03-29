$(function(){
    $.ajax({
        url:"./json/banner.json",
        cache:false,
        type:"GET",
        dataType:"JSON",
        success:function(data,message,jqXHR){ 
           $.fn.abc(data);
        },
        error:function(){
            console.log("통신오류");
        }
    });

      

    $.fn.abc = function(data){
        $.each(data.banners,function(a,b){
            $("#bn").append("<li class = 'b"+a+"'><a href = '"+b[1]+"'> <img src='"+b[0]+"'></a></li>")      
        });
        
            var nn = 0;
            var ea = $("#bn>li").length; 
            var banner_width = $("#bn>li").width();
            var total_size = ea*banner_width 
            $("#bn").css({"width":total_size+"px"});                
          var w = 0; 
          while(w<ea){
              $("#disc").append("<li></li>")
              w++;
            }      
            var nod = 0; 
            var timer = "";
          var m = 0;      

          $.fn.banner = function(){       
              clearTimeout(timer);
              nn++;
              if(nn >= ea){ 
                  nn = 0;
                }
              $("#bn").animate({"left":-banner_width+"px"},800,function(){
                  var copy = $("#bn>li").eq(0).clone();
                  $("#bn>li").eq(0).remove();
                  $("#bn").append(copy);
                  $("#bn").css({"left":0});
                });
                $("#disc > li").css({"background-color":"rgba(255, 255, 255, 0.5)"});
                $("#disc > li").eq(nn).css({"background-color":"white"});
  
                timer = setTimeout($.fn.banner,5000);  

                
            }      
            timer = setTimeout($.fn.banner,5000);           
            
            
            
            $("#pres").click(function(){    
                clearTimeout(timer);
                nn--;
                var last = ea - 1;  
                if(nn<0){nn=last;}  
                $("#disc > li").css({"background-color":"rgba(255, 255, 255, 0.5)"});
                $("#disc > li").eq(nn).css({"background-color":"white"});
                
                var z = $("#bn>li").eq(last).clone(); 
                var z = $("#bn>li").eq(last).remove(); 
                $("#bn").prepend(z); 
                $("#bn").css({"left":-banner_width+"px"}); 
        $("#bn").animate({"left":0},800); 
        timer = setTimeout($.fn.banner,5000);
        
    });
    
    $("#nexts").click(function(){  
        clearTimeout(timer);
        nn++;
        if(nn >= ea){ 
            nn = 0;
        }
        
        $("#bn").animate({
            "left":-banner_width+"px"
        },800,function(){
            var z = $("#bn>li").eq(0).clone();
            $("#bn>li").eq(0).remove();
            $("#bn").append(z);
            $("#bn").css({
                "left":"0px"
            })
        });
        $("#disc > li").css({"background-color":"rgba(255, 255, 255, 0.5)"});
        $("#disc > li").eq(nn).css({"background-color":"white"});
        timer = setTimeout($.fn.banner,5000);
    });       

    
    $("#disc>li").click(function(){
        clearTimeout(timer);
        nod = $(this).index();          
            $("#disc>li").css({
                "background-color":"rgba(255, 255, 255, 0.5)"
            });
            $("#disc>li").eq(nod).css({
                "background-color":"white"
            });
            $.fn.mybanner(nod);    
        })
        
        $.fn.mybanner = function(i){ 
            clearTimeout(timer);
            var classname = ".b"+i;     
            var nos = Math.ceil($("#bn>"+classname).offset().left);
    var pnos = Math.ceil($("#bn").offset().left);
    var total_left = nos - pnos;
    var now_node = Number(String(total_left).substr(0,1));  
    $("#bn").animate({
        "left":-total_left+"px"
    },800,function(){
        var z = 0;
        while(z < now_node){
            var cp = $("#bn > li").eq(0).clone();
            $("#bn > li").eq(0).remove();
            $("#bn").append(cp);
            z++;
        } 
        $("#bn").css({
            "left":"0px"
        });
    });
    nn = i;
    timer = setTimeout($.fn.banner,5000);       
}



}


        
    });
    