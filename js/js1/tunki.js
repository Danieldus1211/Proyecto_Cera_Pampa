function justNumbers(e)
{
var keynum = window.event ? window.event.keyCode : e.which;
if ((keynum == 8) || (keynum == 46))
return true;
 
return /\d/.test(String.fromCharCode(keynum));
}
var vuelta = function(){
	$('.cir_ag i').animate({marginLeft:62},150,'linear',function(){$(this).animate({marginLeft:60},150,'linear')})
	$('.cir_aw i').animate({marginLeft:2},150,'linear',function(){$(this).animate({marginLeft:0},150,'linear')})}
var j = jQuery.noConflict();
j(document).ready(function(){
	//Parte 01	
	var width = j(window).width();
	j(window).resize(function(){
		/*if(width <= 650){j('.cont-h').css({top: (j(window).height() - j('.cont-h').outerHeight()) / 2, left: (j(window).outerWidth() - j('.cont-h').outerWidth()) / 2});}else{*/
		j('.cont-h').css({top: (j(window).height() - (j('.cont-h').outerHeight() + j('.bot').outerHeight() + 24)) / 2,left: (j(window).width() - j('.cont-h').outerWidth()) / 2});
		j('.redes_social').css({top: (j(window).height() - j('.redes_social').outerHeight()) / 2});
		j('.menu_top').css({top: (j(window).height() - j('.menu_top').outerHeight()) / 2});
		if(width <= 500){j('.mrr-ul').css({height : j(window).height() - (j('.mr-01').outerHeight() + 30), overflow : 'hidden'});}
		else{j('.mrr-ul').css({height : j(window).height() - (j('.mr-01').outerHeight() + 40), overflow : 'hidden'});}
		j('.mr-ul').css({height : (j('.mrr-ul').outerHeight() - j('.re-m').outerHeight()) - 20});
		//j('.me-01').css({position: 'relative', top: (j(window).height() - j('.cont_me').outerHeight()) / 2});
	});
	j(window).resize();	
	//Fin
	//Parte 02
	if(width <= 650){
		j('.cir_ag').click(function(){j('.cir_ag').css({'display': 'none'});j('.cir_ag2').css({'display': 'block'});if(width <= 500){j('.img_ag').css({'height': '148px'});}else{j('.img_ag').css({'height': '145px'});}j('.sombra1').slideToggle('slow');j('.area_grafica').css({'min-height':'486px','height':'586px'});setTimeout(function(){j('.area_grafica').css({'height':'auto'});},300);j('.img_aw').css({'display': 'none'});j('.cir_aw, .cir_aw2').css({'display': 'none'});});
		j('.cir_ag2').click(function(){j('.cir_ag2').css({'display': 'none'});j('.cir_ag').css({'display': 'block'});j('.img_ag').css({'height': 'auto'});j('.sombra1').slideToggle('slow');j('.area_grafica').css({'min-height':'0px','height':'0px'});j('.img_aw').css({'display': 'block'});j('.cir_aw').css({'display': 'block'});});
		j('.cir_aw').click(function(){if(width <= 500){j('.img_aw').css({'height': '148px'});j('.img_aw').addClass('img_aw01');}else{j('.img_aw').css({'height': '145px'});}j('.cir_ag').css({'display': 'none'});j('.img_ag').css({'display': 'none'});j('.sombra2').slideToggle('slow');j('.area_web').css({'min-height':'510px','height':'510px'});setTimeout(function(){j('.area_web').css({'height':'auto'});},300);j('.cir_aw').css({'display': 'none'});j('.cir_aw2').css({'display': 'block'});});
		j('.cir_aw2').click(function(){j('.img_aw').css({'height': 'auto'});j('.img_aw').removeClass('img_aw01');j('.cir_ag').css({'display': 'block'});j('.img_ag').css({'display': 'block'});j('.sombra2').slideToggle('slow');j('.area_web').css({'min-height':'0px','height':'0px'});j('.cir_aw').css({'display': 'block'});j('.cir_aw2').css({'display': 'none'});});
	}
	else{
		var ne = j('.cir_ag').attr('class');
		j('.cir_ag').click(function(){j('.sombra1').css({'display':'block'});if(j(window).width() <= 850){j('.area_grafica').css({'width': '72.9%','height': '687px','background': '#fff'});}else{j('.area_grafica').css({'width': '73.31%','height': '687px','background': '#fff'});}j('.cir_aw').css({'display': 'none'});j('.img_aw').css({'width': '0px'});j('.cir_ag').css({'display':'none'});if(j(window).width() <= 850){j('.cir_ag2').css({'margin-left': '-156px','display': 'block'});}else{j('.cir_ag2').css({'margin-left': '-171px','display': 'block'});}if(j(window).width() <= 850){j('.img_ag').css({'width': '26.745%','border-right': '2px solid #fff','overflow': 'hidden'});}else{j('.img_ag').css({'width': '26.44%','border-right': '2px solid #fff','overflow': 'hidden'});}j('.cir_ag2 i').css({'display':'block'});});
		j('.cir_ag2').click(function(){j('.img_ag').css({'width': '50%','border': 'none'});j('.sombra1').css({'display': 'none'});j('.area_grafica').css({'width': '0px'});j('.img_aw').css({'width': '50%'});j('.cir_ag2').css({'display': 'none'});j('.cir_ag').css({'display': 'block'});j('.cir_aw').css({'display': 'block'});});
		j('.cir_aw').click(function(){if(j(window).width() <= 850){j('.img_aw').css({'width': '26.745%','border-left': '2px solid #fff'});}else{j('.img_aw').css({'width': '26.44%','border-left': '2px solid #fff'});}j('.cir_aw').css({'display':'none'});j('.cir_aw2').css({'margin-right': '-171px','display':'block'});j('.cir_ag').css({'display': 'none'});j('.img_ag').css({'width': '0px'});j('.sombra2').css({'display':'block'});if(j(window).width() <= 850){j('.area_web').css({'height': '687px','width': '72.9%','background': '#fff'});}else{j('.area_web').css({'height': '687px','width': '73.31%','background': '#fff'});}j('.nav_menu_aw').fadeIn(1500);});
		j('.cir_aw2').click(function(){j('.img_aw').css({'width': '50%','border': 'none'});j('.cir_aw2').css({'display': 'none'});j('.cir_aw').css({'display': 'block'});j('.sombra2').css({'display': 'none'});j('.area_web').css({'width': '0px'});j('.img_ag').css({'width': '50%'});j('.cir_ag').css({'display': 'block'});j('.nav_menu_aw').css({'display':'none'});});
	}
	//Fin
	//Parte 03
	if(width <= 650){
		j('.cir_ag,.cir_ag2').hover(function(){j('.cir_ag i,.cir_ag2 i').addClass('animated infinite bounce1');},function(){j('.cir_ag i,.cir_ag2 i').removeClass('animated infinite bounce1');});
		j('.cir_aw,.cir_aw2').hover(function(){j('.cir_aw i,.cir_aw2 i').addClass('animated infinite bounce');},function(){j('.cir_aw i,.cir_aw2 i').removeClass('animated infinite bounce');});
	}
	else{
		j('.cir_ag,.cir_ag2').hover(function(){j('.cir_ag i,.cir_ag2 i').addClass('animated infinite shake');},function(){j('.cir_ag i,.cir_ag2 i').removeClass('animated infinite shake');});
		j('.cir_aw,.cir_aw2').hover(function(){j('.cir_aw i,.cir_aw2 i').addClass('animated infinite shake');},function(){j('.cir_aw i,.cir_aw2 i').removeClass('animated infinite shake');});
	}
	//Fin
	//Parte 04
	j('.top a').hover(function(){j('.top a i').addClass('animated infinite bounce');},function(e){j('.top a i').removeClass('animated infinite bounce');});
	j('.top2 a').hover(function(){j('.top2 a i').addClass('animated infinite bounce');},function(e){j('.top2 a i').removeClass('animated infinite bounce');});
	j('.top3 a').hover(function(){j('.top3 a i').addClass('animated infinite bounce');},function(e){j('.top3 a i').removeClass('animated infinite bounce');});
	j('.top4 a').hover(function(){j('.top4 a i').addClass('animated infinite bounce');},function(e){j('.top4 a i').removeClass('animated infinite bounce');});
	j('.top5 a').hover(function(){j('.top5 a i').addClass('animated infinite bounce');},function(e){j('.top5 a i').removeClass('animated infinite bounce');});
	j('.top6 a').hover(function(){j('.top6 a i').addClass('animated infinite bounce');},function(e){j('.top6 a i').removeClass('animated infinite bounce');});
	j('.top7 a').hover(function(){j('.top7 a i').addClass('animated infinite bounce');},function(e){j('.top7 a i').removeClass('animated infinite bounce');});
	j('.top8 a').hover(function(){j('.top8 a i').addClass('animated infinite bounce1');},function(e){j('.top8 a i').removeClass('animated infinite bounce1');});
	//Fin
	//Parte 05
	j('.nav_menu_ag ul li a').click(function(e){e.preventDefault();j(this).parent().addClass('act_lo');j(this).parent().siblings().removeClass('act_lo');var tb = j(this).attr('href');j('.cont_areg').not(tb).css('display','none');j(tb).fadeIn();var tb1 = tb.split('#');var tb2 = '#bu_'+tb1[1];j('.cont_aregbu').not(tb2).css('display','none');j(tb2).fadeIn();});
	//Fin
	//Parte 06
	j('.nav_menu_aw ul li a').click(function(event){event.preventDefault();j(this).parent().addClass('act_aw');j(this).parent().siblings().removeClass('act_aw');var ta = j(this).attr('href');j('.cont_aw').not(ta).css('display','none');j(ta).fadeIn();});
	//Fin
	//Parte 08
	j('.txt2').hover(function(){j('.txt2').removeClass('animated zoomIn');j('.txt2').css('opacity','1');j('.txt4,.txt1,.txt3').css('opacity','0.6');j('#img-n1,#img-n3,#img-n4').css('opacity','0');j('#img-n2').css('opacity','1');});
	j('.txt4').hover(function(){j('.txt4').removeClass('animated zoomIn');j('.txt4').css('opacity','1');j('.txt1,.txt2,.txt3').css('opacity','0.6');j('#img-n1,#img-n3,#img-n2').css('opacity','0');j('#img-n4').css('opacity','1');});
	j('.txt3').hover(function(){j('.txt3').removeClass('animated zoomIn');j('.txt3').css('opacity','1');j('.txt1,.txt2,.txt4').css('opacity','0.6');j('#img-n2,#img-n1,#img-n4').css('opacity','0');j('#img-n3').css('opacity','1');});
	j('.txt1').hover(function(){j('.txt1').removeClass('animated zoomIn');j('.txt1').css('opacity','1');j('.txt3,.txt2,.txt4').css('opacity','0.6');j('#img-n4,#img-n3,#img-n2').css('opacity','0');j('#img-n1').css('opacity','1');});
	//Fin
	//Parte 09
	if(width <= 500){j('div.holder1').jPages({containerID: "itemContainer1",previous: 'prev',next: 'next',perPage: 6,midRanger: 3,direction: 'random',animation: 'fadeInLeft'});}
	else{j('div.holder1').jPages({containerID: "itemContainer1",previous: 'prev',next: 'next',perPage: 12,midRanger: 3,direction: 'random',animation: 'fadeInLeft'});}
	//Fin
	//Parte 10
	var emailr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	j('#form').submit(function(){var formdata = new FormData(j('#form')[0]);var nombre = j('#nombre').val();var telefono = j('#telefono').val();var email = j('#email').val();j('.vali').remove();if(nombre == ''){j('#nombre').focus().after('<span class="e_1 vali"><i></i>Ingrese su nombre</span>');return false;}else if(telefono == ''){j('#telefono').focus().after('<span class="e_2 vali"><i></i>Ingrese su Teléfono</span>');return false;}else if(!emailr.test(email) || email == ''){j('#email').focus().after('<span class="e_3 vali"><i></i>E-mail Incorrecto</span>');return false;}else{j('#result').fadeIn();j.ajax({url: 'envio.php',type: 'POST',data: formdata,cache: false,contentType: false,processData: false,beforeSend: function(){j('#result').html('Enviando...');},success: function(data){j('#result').html(data);}});return false;}});
	j('#nombre,#telefono').keyup(function(){if(j(this).val() != ''){j('.vali').fadeOut();return false;}});
	j('#email').keyup(function(){if(j(this).val() != '' && emailr.test(j(this).val())){j('.vali').fadeOut();return false;}});
	//Fin
	//Parte 11
	if (width <= 500) {j(".various").fancybox({maxWidth:459,maxHeight:528,fitToView:false,width:'100%',height:'100%',autoSize:false,closeClick:false,openEffect:'none',closeEffect:'none'});}
	else if(width <= 850){j(".various").fancybox({maxWidth:459,maxHeight:626,fitToView:false,width:'100%',height:'100%',autoSize:false,closeClick:false,openEffect:'none',closeEffect:'none'});}
	else{j(".various").fancybox({maxWidth:1004,maxHeight:483,fitToView:false,width:'100%',height:'100%',autoSize:false,closeClick:false,openEffect:'none',closeEffect:'none'});}
	j(".cotizaciones").fancybox({maxWidth:543,maxHeight:490,fitToView:false,width:'100%',height:'100%',autoSize:false,closeClick:false,openEffect:'none',closeEffect:'none'});
	//Fin
	//Parte 12
	j('.slider4').bxSlider({slideWidth: 300,minSlides: 2,maxSlides: 3,moveSlides: 1,slideMargin: 10});
	j('.slider5').bxSlider({slideWidth: 300,minSlides: 2,maxSlides: 1,moveSlides: 1,slideMargin: 10});		
	//Fin
	//Responsive jQuery.
	if(width <= 850){j('.mr-01').click(function(){j('.mrr-ul').slideToggle();});}
	/*if(width <= 500){
		j('#content_pro').css({'min-height': j('#itemContainer').height()})
	}*/
});