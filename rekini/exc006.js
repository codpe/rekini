EXC={};
EXC.gen=function(p){
  var x1=rand(p.x1)+p.min;
  var x2=rand(p.x2)+p.min;
  
  var exc=(x1*x2)+' / '+x2;
  this.a1=x1
  this.html='<div class="exc001">'+exc+' = <input class="rez" id="r1" type="text" /></div>';
  this.answ=exc+' = '+this.a1;
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