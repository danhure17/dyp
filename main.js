var flippedElement;
var intv;
var intvpres;
pos = 0;
presencontrol = 0;
var counter=0;

/*vars for dimension*/

/*end*/
$(document).on('ready',function(){
	dimensiones();
	imagenes();
	scrollin();
	
});
$(window).on('resize',function(){
	dimensiones();
	imagenes();
	scrollin();
	
	/*greenbar();*/
});
function dimensiones(){
/*barra de inicio*/
width = $(window).width();
height = $(window).height();
logosize = width*0.16;
toplogo = height-(logosize)-(height*0.025);
leftlogo = width*0.05;
fontsize = logosize*0.3*0.5;
topbar = (logosize*0.5)-((logosize*0.4)*0.5);
$('#logo').css('width',logosize+'px');
$('#logo').css('height',logosize+'px');
$('#barra-ppal').css('top',(toplogo)+'px');
$('#barra-ppal').css('height',(logosize)+'px');
$('#logo').css('left',(leftlogo)+'px');
$('#barra-inicio').css('height',(logosize*0.4)+'px');
$('#barra-inicio').css('top',(topbar)+'px');
$('#barra-inicio').css('font-size',fontsize);
$('#barra-inicio').css('width',(width-(leftlogo+(logosize*0.8)))+'px');
$('#texto-superior').css('font-size',fontsize*0.5);
$('#texto-superior').css('top',(topbar+($('#barra-inicio').height()))+'px');
$('#texto-superior').css('width',(width-(leftlogo+(logosize*0.8)))+'px');
$('#texto-superior').css('height',(($('#barra-inicio').height())*0.5)+'px');
$('#trigger3').css('top',(topbar+toplogo)+'px');
/*barra de inicio fin */
/*pantlla principal inicio*/
$('.slide').css('width',width);
$('.slide').css('height',height);
$('#slider').css('width',width);
$('#slider').css('height',height);
$('#pantalla-ppal').css('width',width+'px');
$('#pantalla-ppal').css('height',height+'px');
/*panntalla principal fin*/
/*video inicio*/
$('#video').css('width',width+'px');
$('#video').css('height',height+'px');
$('#video-titulo').css('font-size',fontsize*1.5);
$('#presensomos-cont').css('height',(height*0.7));
presenheight = $('#presensomos-cont').height();
$('#presensomos-cont').css('width',($('#presensomos-cont').height())*1.7777777778);
$('#trigger5').css('top', ($('#presensomos-cont').css('top')));
$('#presensomos-cont').css('left',(width*0.5)-(($('#presensomos-cont').width())*0.5));
$('.pres-cont').css('height', ($('#presensomos-cont').height())+'px');
$('.pres-cont').css('width', (($('#presensomos-cont').width())*0.035)+'px');
$('.pres-cont').css('top',($('#presensomos-cont').css('top')));
var le = parseFloat($('#presensomos-cont').css('left'));
$('#p-prev').css('left',(le-($('.pres-cont').width())));
$('#p-next').css('left',(le+($('#presensomos-cont').width())));
$('.flecha').css('width',(($('.pres-cont').width())*0.8)+'px');
$('.flecha').css('height',(($('.pres-cont').width())*0.8)+'px');
$('#presensomos-cont').css('font-size',(0.1*($('#presensomos-cont').width())+'px'));
$('.diap').css('height',($('#presensomos-cont').height())+'px');
$('.diap').css('width',($('#presensomos-cont').width())+'px');
$('#diap2 .dp2t2').css('width',($('#presensomos-cont').height())*0.3);
$('#diap2 .dp2t2').css('height',($('#presensomos-cont').height())*0.3);
/*video fin*/

$('#servicios').css('width',width+'px');
$('#servicios').css('min-height',height+'px');
$('#servicios-titulo').css('font-size',fontsize*1.5);
$('.circle').data('pwidth',width*0.9+'px');
$('.circle').data('pheight',height*0.9+'px');
$('.circle').data('pleft',width*0.05+'px');
$('.circle').data('ptop',height*0.05+'px');
$('#servicios #card-container .card').css('position','absolute');


var titop = ($('.barra-deco').height())+($('#servicios-titulo').height());
var servicesumatop = (height*2);
$('#servicios #card-container .circle').css('top',titop+(height*0.05)+'px');
var cardcontainerwidth = $('#card-container').width();
$('#card1').css('left',((cardcontainerwidth*0.5)-100-20-200)+'px');
$('#card2').css('left',((cardcontainerwidth*0.5)-100)+'px');
$('#card3').css('left',((cardcontainerwidth*0.5)+120)+'px');
/*$('#servicios .centeecirc').css('left',titop+(height*0.05)+'px');*/
$(document).on('click','.circle',flipElement);
$('.card').flip({
		axis:'y',
		speed:300,
		trigger:'hover', 
		forcewidth:'true'
	});
$('.slide').each(function(i,e){
	addImgBack(e,'.jpg');
});
$('.imgtext').each(function(i,e){
	addImgBack(e,'.png');
});
/*animacion somos ini*/
anim = [new TimelineMax(),new TimelineMax(),new TimelineMax(),new TimelineMax(),new TimelineMax()];
var ani1_1 = new TweenLite.from('.dp1t',1.5,{width:0});
anim[0].add(ani1_1,1);

 
 var ani2_1 = new TweenLite.from('.dp2t1',1,{opacity:0});
 var ani2_2 = new TweenLite.from('.dp2t2',1,{opacity:0});
 var ani2_3 = new TweenLite.from('.dp2t3',1,{opacity:0});
 var ani2_4 = new TweenLite.from('.dp2t4',1,{height:0});
 var ani2_5 = new TweenLite.from('.dp2t5',1,{height:0});
 var ani2_6 = new TweenLite.from('.dp2t6',1,{height:0});

 anim[1].add(ani2_1,1).add(ani2_2,1.5).add(ani2_3,2).add(ani2_4,2.5).add(ani2_5,3).add(ani2_6,3.5);

 var ani3_1 = new TweenLite.from('.dp3t1',1,{opacity:0});
 var ani3_2 = new TweenLite.from('.dp3t2',1,{height:0});
 var ani3_3 = new TweenLite.from('.dp3t3',1,{height:0});
 var ani3_4 = new TweenLite.from('.dp3t4',1,{height:0});

 anim[2].add(ani3_1,1).add(ani3_2,1.5).add(ani3_3,2).add(ani3_4,2.5);

 var ani4_1 = new TweenLite.from('.dp4t1',1,{opacity:0});
 var ani4_2 = new TweenLite.from('.dp4t2',1,{height:0});
 var ani4_3 = new TweenLite.from('.dp4t3',1,{opacity:0});
 var ani4_4 = new TweenLite.from('.dp4t4',1,{opacity:0});

 anim[3].add(ani4_1,1).add(ani4_2,1.5).add(ani4_3,2).add(ani4_4,2.5);

 var ani5_1 = new TweenLite.from('.dp5t1',1,{height:0});
 var ani5_2 = new TweenLite.from('.dp5t2',1,{height:0});
 var ani5_3 = new TweenLite.from('.dp5t3',1,{opacity:0});

 anim[4].add(ani5_1,1).add(ani5_2,1.5).add(ani5_3,2);

anim[0].kill();
anim[1].kill();
anim[2].kill();
anim[3].kill();
anim[4].kill();

/*animacion somos fin*/

}
clearInterval(intv);
intv = setInterval(slide,10000);
$(document).on('click','#p-prev',function(){presmov(null);});
$(document).on('click','#p-next',function(){presmov(1);});

/*function greenbar(){
	var barwidth;
	var barheight;
	barwidth = width;
	barheight = height*0.025;
	$('.barra-deco').css('width',barwidth);
	$('.barra-deco').css('height',barheight);
	$('#gb1').css('top',(height-barheight));

}*/

function imagenes(){
	addImgBack('#logo','.png');
	$('.diap').each(function(i,e){
		addImgBack(e,'.jpg');
	});
	$('.card .front').each(function(i,e){
		addImgBack(e,'.png');
	});
	addImgBack('#diap2 .dp2t2','.png');

}
function addImgBack(elmt,formt){
	var imgfondo = $(elmt).data('background');
	$(elmt).css('background-image','url('+imgfondo+formt+')');
}
function presmov(direc){
	var diapselecles=0;
	
	if(direc===null){
		/**/
		if(presencontrol>0){
			presencontrol--;
		}
		diapselecles = presencontrol + 1;
	}else if(direc===1){
		/**/
		if(presencontrol<(($('.diap').length)-1)){
			presencontrol++;
		}
		diapselecles = presencontrol - 1;
	}else if(direc===3){
		/**/
		if(presencontrol<(($('.diap').length)-1)){
			presencontrol++;
		}else{
			presencontrol=0;
			diapselecles = 4;
		}
		;
	}
		
	$('#present-direct-cont').animate({
			'margin-left': -((presencontrol)*($('.diap').width()))+'px'
		},'slow');

	anim[presencontrol].play(0);
	anim[diapselecles].kill();
	presencontrol2=presencontrol;
	clearInterval(intvpres);
	intvpres = setInterval(presmovtemp,1000);

}
function callback (event) {
		
        console.log("Event fired! (" + event.type + ")");
        if(event.type=="enter"){
        	clearInterval(intvpres);
        	intvpres = setInterval(presmovtemp,1000);
        	anim[0].play(0);
        }else if(event.type=="leave"){
        	clearInterval(intvpres);
        }
}
function presmovtemp(){

	var tcounter = [3,8,6,6,6];
	if(tcounter[presencontrol]==counter){
		presmov(3);
		counter = 0;
	}else{
		counter++;
	}
	
}
function flipElement(){
	
	flippedElement = $(this);
	flippedElement.css('left',0);
	flippedElement.find('.card').css('display','none');
	flippedElement.removeClass('circle');
	flippedElement.addClass('posicion-total-info');
	$('.posicion-total-info').css('top',0+'px');
	$('#servicios #card-container').find('.b-click').css('display','none');
	$('#servicios #card-container').find('.a-click').css('display','inline');
	/*$('.posicion-total-info').css('width',($('.circle').data('pwidth')));
	$('.posicion-total-info').css('height',($('.circle').data('pheight')));
	$('.posicion-total-info').css('left',($('.circle').data('pleft')));
	$('.posicion-total-info').css('top',($('.circle').data('ptop')));*/


}
function scrollin(){
	$('#barra-inicio').localScroll();
	$.stellar({
		'horizontalscrolling':false
	});
	var controller = new ScrollMagic.Controller();
	var tween2 = new TweenLite.from("#imgnlogovideo",0.2,{opacity:0 ,scale: 0.5});
	var tween1 = new TweenLite("#animate1",0.2,{backgroundColor:"green",scale: 2.5});
	var timeline1 = new TimelineMax();
	timeline1.add(tween1).add(tween2);
	var scene = new ScrollMagic.Scene({
									triggerElement: "#trigger1"
								})
								.setTween(timeline1)
								.addIndicators({name: "1 (duration: 0)"})
								.addTo(controller);
	var tween = new TweenLite.from(".circle",0.2,{opacity:0 ,scale: 0.5});
	var scene = new ScrollMagic.Scene({
									triggerElement: "#trigger2"
								})
								.setTween(tween)
								.addIndicators({name: "1 (duration: 0)"})
								.addTo(controller);
	var scene2 = new ScrollMagic.Scene({
									triggerElement: "#trigger5", duration: presenheight
								})
								.addIndicators({name: "3 "})
								.addTo(controller);
	var controller2 = new ScrollMagic.Controller();
	var timeline2 = new TimelineMax();
	var tween31 = TweenLite.to("#barra-inicio",0.03, {top:-1, position:"fixed"});
	var tween32 = TweenLite.to("#barra-inicio",0.5, {width:(width+4),height:((width*0.18*0.3)*0.7),'font-size':(fontsize*0.7),left:-4});
	var tween33 = TweenMax.to("#logo",0.5, {top:0, position:"fixed",width:(logosize*0.3),height:(logosize*0.3)});
	var tween34 = TweenMax.to("#texto-superior",0.5, {opacity:0});
	timeline2.add(tween33,0).add(tween31,0).add(tween32,0).add(tween34,0);
	var scene = new ScrollMagic.Scene({
									triggerElement: "#trigger3"
								})
								.setTween(timeline2)
								.addIndicators({name: "1 (duration: 0)"})
								.addTo(controller2)
								.setClassToggle("#encabezado", "fijo")
								.triggerHook(0);



// add listeners
scene2.on("start end enter leave", callback);
}
function slide(){
	if((pos)<(($('.slide').length)-1)){
		pos++;
	}else{
		pos=0;
	}
	$('.slidecontainer').animate({
		'margin-left':-(pos*($('.slide').width()))+'px'
	},'slow');

}