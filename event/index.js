function gocgv(){location.href="https://www.cgv.co.kr/"}
function corp(no){window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no="+no,"","width=500 height=500");}

function events(){
    var result = number_check(ev.event_user.value);
    if(ev.event_user.value==""){alert("이름을 입력하세요.");}
    else if(result == "ok"){alert("올바른 이름을 입력하세요.")}
    else{var result = number_check(ev.event_email.value);
      if(ev.event_email.value==""){alert("이메일을 입력하세요");}
      else if(result == "ok"){alert("올바른 이메일을 입력하세요.")}
      else {var result = number_check(ev.event_tel.value);
         if(ev.event_tel.value==""){alert("휴대폰 번호를 입력하세요");}
         else if(result=="no"){alert("휴대폰 번호는 숫자만 입력하세요 ('-'제외)");}
         else if(ev.event_tel.value.length<10){alert("올바른 휴대폰 번호를 입력하세요 ('-'제외)");}
         else{var result = number_check(ev.event_number.value);
            if(ev.event_number.value==""){alert("티켓번호를 입력하세요");}
            else if(ev.event_number.value.length!=8||result=="no"){alert("티켓번호는 8자리 숫자입니다.");}
            else if(ev.event_check.checked == false){alert("이용악관에 동의해주세요");}
            else{ev.submit();}}}}}

function number_check(data){
    var msg="";
    if(isNaN(data)){msg="no";}  
    else{msg="ok";}
    return msg; }