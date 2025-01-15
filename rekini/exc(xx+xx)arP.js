EXC={};
EXC.gen=function(p){
  var x11=rand(8)+2;
  var x12=rand(9);
  var x21 = rand(x11 - 1) + (11 - x11);
  var x22 = rand(10 - x12);
  
  var sk1 = (x12*10+x11);
  var sk2 = (x22*10+x21);
  var exc= sk1 +' + '+ sk2;
  var excvis = '<div><input class="b2"/><input class="b2"/><input class="b2"/></div>'
  excvis += '<div>' + sk1 + '</div>';
  excvis += '<div>+ ' + sk2 + '</div>';
  console.log(excvis);
  this.a1=eval('('+exc+')');
  this.html='<div class="exc002">'+excvis+' <div> = <input class="rez" id="r1" type="text" /></div></div>';
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