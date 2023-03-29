$(function(){
    var data = ["게임덱후들(유민상,김준현)", "44층 지하던전", "켠왕켜놩(켠김에왕까지-허준)", "핑거게임(신동엽, 장도연)", "플레이어2 (이수근,이진호, 이용진, 이이경, 이진호, 정혁, 황치열, 김동현)" ]
    var no;
    var node ;  
    $.each(data,function(a,b){
    console.log(a,b)
        no= a+1;
        $("#prints > li").eq(a).css({"background-image":"url('./contents/mini"+no+"-black.png')"});
        $("#prints > li").eq(a).attr({"title":b});
    })   
    
    
     $("#prints > li").bind({
    "mouseenter":function(){ 
        node = $(this).index() ; no = node+1;
        $("#prints > li").eq(node).css({"background-image":"url('./contents/mini"+no+"-color.png')"});     
    },
    "mouseleave":function(){   
     
        node = $(this).index() ;  no = node+1;     
        $("#prints > li").eq(node).css({"background-image":"url('./contents/mini"+no+"-black.png')"});
    }
});
    
    })

