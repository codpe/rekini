EXC={};
EXC.gen=function(p){  

  var z1=rand(3);
  //console.info('z1:'+z1);
  switch (z1){
    case 0:
      exc=rand(10)+' * '+rand(10);
      if (rand(2)==0) {exc='( '+exc+')';}
      break;
    case 1:
      exc='( '+rand(50)+' + '+rand(50)+' ) ';
      break;
    case 2:
      var a=rand(100)
      exc= '( '+a+' - '+rand(a)+' ) ';
      break;
  }  
  
  //console.info(exc);
  var val=parseInt(eval('('+exc+')'));
  
  var z2=rand(3);
  //console.info('z2:'+z2);
  switch (z2){
    case 0:
      exc=(rand(2)==0?rand(10)+' * '+exc:exc+' * '+rand(10));
      break;
    case 1:
      exc=(rand(2)==0?rand(100)+' + '+exc:exc+' + '+rand(100));
      break;
    case 2:
      exc=(rand(2)==0?(rand(100)+val)+' - '+exc:exc+' - '+(rand(val)));
      break;    
  }
  //console.info(exc);
  
  this.a1=eval('('+exc+')');
  this.html='<div class="exc001">'+exc+' = <input class="rez" id="r1" type="text" /></div>';
  this.answ=exc+' = '+this.a1;  
  
  /*
  if (z1==0 && z2==0){
    //X*X*X
    x1=rand(10);
    x2=rand(10);
    x3=rand(10);
    exc=x1+z[z1]+x2+z[z2]+x3;
  }
  if (z1==0 && z2==1){
    if (i1==0){
      //X*X+X
      x1=rand(10); x2=rand(10); x3=rand(10);
      exc=x1+z[z1]+x2+z[z2]+x3;
    } else {
      //X*(X+X)
      x1=rand(10); x2=rand(50); x3=rand(50);
      exc=x1+z[z1]+'('+x2+z[z2]+x3+')';
    }    
  }
  if (z1==0 && z2==2){
    if (i1==0){
      //X*X-X
      x1=rand(10); x2=rand(10); x3=rand(x1*x2);
      exc=x1+z[z1]+x2+z[z2]+x3;
    } else {
      //X*(X-X)
      x2=rand(100); x3=rand(x2); x1=rand(10);
      exc=x1+z[z1]+'('+x2+z[z2]+x3+')';
    }    
  }  
  
  if (z1==1 && z2==0){
  
    if (i1==0){
      //X+X*X
      x1=rand(10); x2=rand(10); x3=rand(10);
      exc=x1+z[z1]+x2+z[z2]+x3;
    } else {
      //(X+X)*X
      x1=rand(10); x2=rand(10); x3=rand(10);
      exc=x1+z[z1]+'('+x2+z[z2]+x3+')';
    } 
  }
  if (z1==1 && z2==1){
    if (i1==0){
      //X*X+X
      x1=rand(10); x2=rand(10); x3=rand(10);
      exc=x1+z[z1]+x2+z[z2]+x3;
    } else {
      //X*(X+X)
      x1=rand(10); x2=rand(10); x3=rand(10);
      exc=x1+z[z1]+'('+x2+z[z2]+x3+')';
    }    
  }
  if (z1==1 && z2==2){
    if (i1==0){
      //X*X-X
      x1=rand(10); x2=rand(10); x3=rand(x1*x2);
      exc=x1+z[z1]+x2+z[z2]+x3;
    } else {
      //X*(X-X)
      x2=rand(100); x3=rand(x2); x1=rand(10);
      exc=x1+z[z1]+'('+x2+z[z2]+x3+')';
    }    
  }  */ 
  

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