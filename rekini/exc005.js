EXC={};
EXC.gen=function(p){  

  x=rand(10);
  a=rand(10);
  b=rand(10);
  
  
  this.a1=a*x+b;
  this.html='<div class="exc001">X='+x+'<br />'+a+'X + '+b+' = <input class="rez" id="r1" type="text" /></div>';
  this.answ='X='+x+' | '+a+'X+'+b+'='+this.a1;  


}

EXC.check=function(){
  return $('#r1').val()==this.a1;
}

EXC.afterHtml=function(){
  $('#r1').focus();
  $('.rez').keydown(function(e){if (e.keyCode==13){check();}});  
}

EXC.answer=function(){
  return $('#r1').val();
}