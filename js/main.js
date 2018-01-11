var flippedElement;
var intv;
var intvpres;
pos = 0;
presencontrol = 0;
var counter=0;
/*var width=0;
var height=0;
var orientation=0;
var logosize = 0;
var toplogo = 0;
var leftlogo = 0;
var fontsize = 0;
var topbar = 0;*/


/*vars for dimension*/

/*end*/
$(document).on('ready',function(){
	todos();
	
	
	
});
window.addEventListener('resize',function(){
	todos();
});
window.addEventListener('orientationchange',todos);
function todos(){
	width = $(window).innerWidth();
	height = $(window).innerHeight();
	orientation = width/height;
	logosize = width*0.16;
	toplogo = height-(logosize)-(height*0.025);
	leftlogo = width*0.05;
	fontsize = logosize*0.3*0.5;
	topbar = (logosize*0.5)-((logosize*0.4)*0.5);
	general();
	imagenes();

}
function general(){
	/**/
	
	if(width<800){
		dimensionmovil();
	}else if(width>=800){
		dimensiones();
	}

	$('#barra-inicio').localScroll();
	$.stellar({
		'horizontalscrolling':false
	});
	

	

	/*$('#servicios .centeecirc').css('left',titop+(height*0.05)+'px');*/
	$(document).on('click','.circle',flipElement);
	
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
function dimensiones(){
	/*DESKTOP*/
	/*barra de inicio*/
	$('#logo').css('width',logosize+'px');
	$('#logo').css('height',logosize+'px');
	$('#barra-ppal').css('top',(toplogo)+'px');
	$('#barra-ppal').css('height',(logosize)+'px');
	$('#logo').css('left',(leftlogo)+'px');
	$('#barra-inicio').css('height',(logosize*0.4)+'px');
	$('#barra-inicio').css('top',(topbar)+'px');
	$('#barra-inicio').css('font-size',fontsize);
	$('#barra-inicio').css('width',(width-(leftlogo+(logosize*0.8)))+'px');
	$('#texto-superior').css('font-size',($('#texto-superior').height())*0.4);
	$('#texto-superior').css('top',(($('#barra-inicio').height()))+'px');
	$('#texto-superior').css('width',(width-(leftlogo+(logosize*0.8)))+'px');
	$('#texto-superior').css('height',(($('#barra-inicio').height())*0.5)+'px');
	$('#trigger3').css('top',(topbar+toplogo)+'px');
	/*barra de inicio fin */
	/*SERVICIOS*/
	var cardcontainerwidth = $('#card-container').width();
	var circlesizehor = (cardcontainerwidth/3)*0.9;
	addCss('#servicios #card-container .circle .card .front','width',circlesizehor);
	addCss('#servicios #card-container .circle .card .front','height',circlesizehor);
	addCss('#servicios #card-container .circle','width',circlesizehor);
	addCss('#servicios #card-container .circle','height',circlesizehor);
	addCss('#servicios #card-container #card2','left',(cardcontainerwidth*0.5)-(circlesizehor*0.5));
	addCss('#servicios #card-container #card1','left',(cardcontainerwidth*0.5)-(circlesizehor*0.5)-(circlesizehor*0.1)-(circlesizehor));
	addCss('#servicios #card-container #card3','left',(cardcontainerwidth*0.5)-(circlesizehor*0.5)+(circlesizehor*0.1)+(circlesizehor));
	addCss('#servicios #card-container .circle .card .back','width',circlesizehor);
	addCss('#servicios #card-container .circle .card .back','height',circlesizehor);
	addEveryBrowscss('#servicios #card-container .circle .card .front','border-radius',circlesizehor);
	addEveryBrowscss('#servicios #card-container .circle .card .back','border-radius',circlesizehor);
	/*SERVICIOS FIN*/
	/*pantlla principal inicio*/
	$('.slide').css('width',width);
	$('.slide').css('height',height);
	$('#slider').css('width',width);
	$('#slider').css('height',height);
	$('#slider').css('top',0);
	$('#pantalla-ppal').css('width',width+'px');
	$('#pantalla-ppal').css('height',height+'px');
	/*panntalla principal fin*/
	/*video inicio*/
	$('#video').css('width',width+'px');
	$('#video').css('height',height+'px');
	$('#video-titulo').css('font-size',fontsize*1.5);
	$('#presensomos-cont').css('height',(height*0.7));
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
	addImgBack('#logo','.png',0);
	$('.diap').each(function(i,e){
		addImgBack(e,'.jpg',0);
	});
	/*video fin*/
	/*SERVICIOS*/
	$('#servicios').css('width',width+'px');
	$('#servicios').css('min-height',height+'px');
	$('#servicios-titulo').css('font-size',fontsize*1.5);
	$('.circle').css('font-size',circlesizehor*0.08);
	/*$('.circle').data('pwidth',width*0.9+'px');
	$('.circle').data('pheight',height*0.9+'px');
	$('.circle').data('pleft',width*0.05+'px');
	$('.circle').data('ptop',height*0.05+'px');*/
	$('#servicios #card-container .card').css('position','absolute');
	/*SERVICIOS FIN*/
	var cardcontainerwidth = $('#card-container').width();
	scrollin();
	$('.card').flip({
			axis:'y',
			speed:300,
			trigger:'hover', 
			forcewidth:'true'
		});

}
function dimensionmovil(){

	$('#menu').slicknav({
		label:'',
		closeOnClick: true,
		prependTo:'#barra-inicio'
	});
	addCss('#barra-inicio','width',width);
	addCss('#barra-inicio','height',height*0.07);
	addCss('#barra-inicio','top',0);
	addCss('#texto-superior','width',($('#barra-inicio').width())*0.8);
	addCss('#texto-superior','height',($('#barra-inicio .slicknav_menu').height()));
	$('#texto-superior').css('font-size',($('#texto-superior').width())*0.03);
	$('#logo2').css('width',($('#barra-inicio .slicknav_menu').height())+'px');
	$('#logo2').css('height',($('#barra-inicio .slicknav_menu').height())+'px');
	if(orientation>=1){
		/*INICIO*/
		/*addCss('#pantalla-ppal','width',width);
		addCss('#pantalla-ppal','height',height);*/
		$('.slide').css('width',width);
		$('.slide').css('height',height);
		$('#slider').css('width',width);
		$('#slider').css('height',height);
		$('#pantalla-ppal').css('width',width+'px');
		$('#pantalla-ppal').css('height',height+'px');
		$('#slider').css('top',0);
		/*INICIO FIN*/
		/*SOMOS*/
		addCss('#video','width',width);
		addCss('#video','height',height);
		$('#presensomos-cont').css('height',(height*0.7));
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
		addImgBack('#logo','.png',0);
		$('.diap').each(function(i,e){
		addImgBack(e,'.jpg',0);
	});
		/*SOMOS FIN*/
		/*SERVICIOS*/
		addCss('#servicios','width',width);
		addCss('#servicios','height',height);
		var cardcontainerwidth = $('#card-container').width();
		var circlesizehor = (cardcontainerwidth/3)*0.6;
		addCss('#servicios #card-container .circle','width',circlesizehor);
		addCss('#servicios #card-container .circle','height',circlesizehor);
		addCss('#servicios #card-container .circle .card .front','width',circlesizehor);
		addCss('#servicios #card-container .circle .card .front','height',circlesizehor);
		addCss('#servicios #card-container .circle .card .back','width',circlesizehor);
		addCss('#servicios #card-container .circle .card .back','height',circlesizehor);
		addEveryBrowscss('#servicios #card-container .circle .card .front','border-radius',circlesizehor);
		/*addEveryBrowscss('#servicios #card-container .circle .card .back','border-radius',circlesizehor);*/
		$('.circle').css('font-size',circlesizehor*0.08);
		addCss('#servicios #card-container #card2','left',(cardcontainerwidth*0.5)-(circlesizehor*0.5));
		addCss('#servicios #card-container #card1','left',(cardcontainerwidth*0.5)-(circlesizehor*0.5)-(circlesizehor*0.3)-(circlesizehor));
		addCss('#servicios #card-container #card3','left',(cardcontainerwidth*0.5)-(circlesizehor*0.5)+(circlesizehor*0.3)+(circlesizehor));
		
		/*SERVICIOS FIN*/
	}else if(orientation<1){
		/*INICIO*/
		/*addCss('#pantalla-ppal','width',width);
		addCss('#pantalla-ppal','height',height);*/
		$('.slide').css('width',width);
		$('.slide').css('height',width/1.566176471);
		$('#slider').css('width',width);
		$('#slider').css('height',width/1.566176471);
		$('#slider').css('top',($('#barra-inicio .slicknav_menu').height()));
		$('#pantalla-ppal').css('width',width+'px');
		$('#pantalla-ppal').css('height',(height)+'px');
		$('#movilogo2').css('height',($('#movilogo2').width())+'px');
		addEveryBrowscss('#movilogo2','border-radius',($('#movilogo2').width())+'px');
		/*INICIO FIN*/
		/*SOMOS*/
		addCss('#video','width',width);
		addCss('#video','height',height);
		$('#presensomos-cont').css('width',(width*0.95));
		$('#presensomos-cont').css('height',($('#presensomos-cont').width()));
		$('#trigger5').css('top', ($('#presensomos-cont').css('top')));
		$('#presensomos-cont').css('left',(width*0.025));
		$('.diap').css('height',($('#presensomos-cont').height())+'px');
		$('.diap').css('width',($('#presensomos-cont').width())+'px');
		$('.pres-cont').css('height', ($('#presensomos-cont').height())*0.15+'px');
		$('.pres-cont').css('width', (($('#presensomos-cont').width())*0.5)+'px');
		var la = parseFloat($('#presensomos-cont').css('top'));
		$('.pres-cont').css('top',la+($('#presensomos-cont').height()));
		var le = parseFloat($('#presensomos-cont').css('left'));
		$('#p-prev').css('left',le);
		$('#p-next').css('left',(le+($('.pres-cont').width())));
		$('.flecha').css('width',(($('.pres-cont').width())*0.25)+'px');
		$('.flecha').css('height',(($('.flecha').width()))+'px');
		$('#presensomos-cont').css('font-size',(0.1*($('#presensomos-cont').width())+'px'));
		$('#diap2 .dp2t2').css('width',($('#presensomos-cont').height())*0.3);
		$('#diap2 .dp2t2').css('height',($('#presensomos-cont').height())*0.3);
		addImgBack('#logo','.png',0);
		$('.diap').each(function(i,e){
		addImgBack(e,'-mobile.jpg',0);
		});
		/*SOMOS FIN*/
		/*SERVICIOS*/
		addCss('#servicios','width',width);
		addCss('#servicios','height',height);
		var cardcontainerwidth = $('#card-container').width();
		var cardcontainerheight = $('#card-container').height();
		circlesizehor = (cardcontainerheight/3)*0.7;
		addCss('#servicios #card-container .circle','width',circlesizehor);
		addCss('#servicios #card-container .circle','height',circlesizehor);
		addCss('#servicios #card-container .circle .card .front','width',circlesizehor);
		addCss('#servicios #card-container .circle .card .front','height',circlesizehor);
		addCss('#servicios #card-container .circle .card .back','width',circlesizehor);
		addCss('#servicios #card-container .circle .card .back','height',circlesizehor);
		addEveryBrowscss('#servicios #card-container .circle .card .front','border-radius',circlesizehor);
		/*addEveryBrowscss('#servicios #card-container .circle .card .back','border-radius',circlesizehor);*/
		$('.circle').css('font-size',circlesizehor*0.08);
		addCss('#servicios #card-container #card2','top',(cardcontainerheight*0.5)-(circlesizehor*0.5));
		addCss('#servicios #card-container #card1','top',(cardcontainerheight*0.5)-(circlesizehor*0.5)-(circlesizehor*0.1)-(circlesizehor));
		addCss('#servicios #card-container #card3','top',(cardcontainerheight*0.5)-(circlesizehor*0.5)+(circlesizehor*0.1)+(circlesizehor));
		/*SERVICIOS FIN*/

	}
}
clearInterval(intv);
intv = setInterval(slide,5000);
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
function addEveryBrowscss(elm,propety,option){
	$(elm).css('-webkit-'+propety,option);
	$(elm).css('-moz-'+propety,option);
	$(elm).css('-ms-'+propety,option);
	$(elm).css('-o-'+propety,option);
	$(elm).css(propety,option);
}
function addCss(elm,propety,option){
	$(elm).css(propety,option);
}
function imagenes(){
	
	$('.card .front').each(function(i,e){
		addImgBack(e,'.png',0);
	});
	addImgBack('#diap2 .dp2t2','.png',0);
	$('.slide').each(function(i,e){
		addImgBack(e,'.jpg',1);
	});
	$('.imgtext').each(function(i,e){
		addImgBack(e,'.png',0);
	});
	addImgBack('#movilogo2','.png',0);

}
function addImgBack(elmt,formt,resp){
	var imgfondof;
	var imgfondo = $(elmt).data('background');
	if(resp==1){
		if(width<800){
			imgfondof = imgfondo+'-mobile'+formt;
		}else{
			imgfondof = imgfondo+formt;
		}
	}else if(resp==0){
		imgfondof = imgfondo+formt;
	}
	
	$(elmt).css('background-image','url('+imgfondof+')');
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
	
	presenheight = $('#presensomos-cont').height();
	controller = new ScrollMagic.Controller();
	tween2 = new TweenLite.from("#imgnlogovideo",0.2,{opacity:0 ,scale: 0.5});
	tween1 = new TweenLite("#animate1",0.2,{backgroundColor:"green",scale: 2.5});
	timeline1 = new TimelineMax();
	timeline1.add(tween1).add(tween2);
	scene1 = new ScrollMagic.Scene({
									triggerElement: "#trigger1"
								})
								.setTween(timeline1)
								.addIndicators({name: "1 (duration: 0)"})
								.addTo(controller);
	tween = new TweenLite.from(".circle",0.2,{opacity:0 ,scale: 0.5});
	scene2 = new ScrollMagic.Scene({
									triggerElement: "#trigger2"
								})
								.setTween(tween)
								.addIndicators({name: "1 (duration: 0)"})
								.addTo(controller);
	scene3 = new ScrollMagic.Scene({
									triggerElement: "#trigger5", duration: presenheight
								})
								.addIndicators({name: "3 "})
								.addTo(controller);
	controller2 = new ScrollMagic.Controller();
	timeline2 = new TimelineMax();
	

	scene4 = CreateScene3();



// add listeners
scene3.on("start end enter leave", callback);
}
window.addEventListener('resize',function(){
	scene4.destroy(true);
	scene4 = CreateScene3();
});
function CreateScene3(){
	tween32 = TweenLite.to("#barra-inicio",0.5, {width:(width+4),height:((width*0.18*0.3)*0.7),'font-size':(fontsize*0.7),left:-4});
	tween33 = TweenMax.to("#logo",0.5, {css:{scale:0.5}});
	tween34 = TweenMax.to("#texto-superior",0.5, {opacity:0});
	timeline2.add(tween32,0).add(tween34,0).add(tween33,0);
	return new ScrollMagic.Scene({
									triggerElement: "#trigger3"
								})
								.setTween(timeline2)
								.setPin('#logo')
								.setPin('#barra-inicio')
								.addIndicators({name: "1 (duration: 0)"})
								.addTo(controller2)
								.setClassToggle("#encabezado", "fijo")
								.triggerHook(0);
}
function scrollinmovil(){
	/**/
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