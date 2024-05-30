var j = jQuery.noConflict();
j(document).ready(function(){
		j('#fullpage').fullpage({
			menu: '#menu-ul',
			anchors: ['inicio','menu','nosotros','equipo','servicios','proyectos','clientes','contactenos'],
			scrollOverflow: true,
			afterLoad: function(anchorLink){
				if(anchorLink == '' || anchorLink == 'inicio'){j('.mrr-ul').css({'display':'none'});j('.redes_social').css('display','none');j('.menu_top').css('display','none');}
				else{
					j('.mrr-ul').css({'display':'none'});j('.redes_social').fadeIn();j('.menu_top').fadeIn();
					if(anchorLink == 'nosotros'){
						j('.i_fa').css('background','url(img/fa1.png)');
						j('.i_go').css('background','url(img/go1.png)');
						j('.i_yo').css('background','url(img/yo1.png)');
						j('.i_tw').css('background','url(img/tw1.png)');
						j('.i_pi').css('background','url(img/pi1.png)');
						j('.i_li').css('background','url(img/in1.png)');
						j('.i_bo').css('background','url(img/blo2.png)');
						j('.i_fa').hover(function(e){j(this).css('background','url(img/fa1-h.png)');},function(){j(this).css('background','url(img/fa1.png)');});
						j('.i_go').hover(function(e){j(this).css('background','url(img/go1-h.png)');},function(){j(this).css('background','url(img/go1.png)');});
						j('.i_yo').hover(function(e){j(this).css('background','url(img/yo1-h.png)');},function(){j(this).css('background','url(img/yo1.png)');});
						j('.i_tw').hover(function(e){j(this).css('background','url(img/tw1-h.png)');},function(){j(this).css('background','url(img/tw1.png)');});
						j('.i_pi').hover(function(e){j(this).css('background','url(img/pi1-h.png)');},function(){j(this).css('background','url(img/pi1.png)');});
						j('.i_li').hover(function(e){j(this).css('background','url(img/in1-h.png)');},function(){j(this).css('background','url(img/in1.png)');});
						j('.i_bo').hover(function(e){j(this).css('background','url(img/blo2-h.png)');},function(){j(this).css('background','url(img/blo2.png)');});
						j('.ic_inicio').css('background','url(img/mi1.png)');j('.ic_nosotros').css('display','block');j('.ic_equipo').css('display','block');
						j('.ic_queh').css('display','block');j('.ic_proyectos').css('display','block');j('.ic_clientes').css('display','block');j('.ic_contactenos').css('display','block');j('.ic_nosotros').hover(function(){j('.ic_nosotros').css('display','block');});j('.ic_equipo').hover(function(){j('.ic_equipo').css('display','block');});j('.ic_queh').hover(function(){j('.ic_queh').css('display','block');});j('.ic_proyectos').hover(function(){j('.ic_proyectos').css('display','block');});j('.ic_clientes').hover(function(){j('.ic_clientes').css('display','block');});j('.ic_contactenos').hover(function(){j('.ic_contactenos').css('display','block');});j('.ic_inicio').hover(function(e){j('.ic_inicio').css('background','url(img/mi1-h.png)');},function(e){j('.ic_inicio').css('background','url(img/mi1.png)');});}
					else if(anchorLink == 'equipo'){
						j('.i_fa').css('background','url(img/fa1.png)');
						j('.i_go').css('background','url(img/go1.png)');
						j('.i_yo').css('background','url(img/yo1.png)');
						j('.i_tw').css('background','url(img/tw1.png)');
						j('.i_pi').css('background','url(img/pi1.png)');
						j('.i_li').css('background','url(img/in1.png)');
						j('.i_bo').css('background','url(img/blo2.png)');
						j('.i_fa').hover(function(e){j(this).css('background','url(img/fa2-h.png)');},function(){j(this).css('background','url(img/fa1.png)');});
						j('.i_go').hover(function(e){j(this).css('background','url(img/go2-h.png)');},function(){j(this).css('background','url(img/go1.png)');});
						j('.i_yo').hover(function(e){j(this).css('background','url(img/yo2-h.png)');},function(){j(this).css('background','url(img/yo1.png)');});
						j('.i_tw').hover(function(e){j(this).css('background','url(img/tw2-h.png)');},function(){j(this).css('background','url(img/tw1.png)');});
						j('.i_pi').hover(function(e){j(this).css('background','url(img/pi2-h.png)');},function(){j(this).css('background','url(img/pi1.png)');});
						j('.i_li').hover(function(e){j(this).css('background','url(img/in2-h.png)');},function(){j(this).css('background','url(img/in1.png)');});
						j('.i_bo').hover(function(e){j(this).css('background','url(img/blo3-h.png)');},function(){j(this).css('background','url(img/blo2.png)');});
						j('.ic_inicio').css('background','url(img/mi2.png)');j('.ic_nosotros').css({'display':'block','background':'url(img/menu1.png)'});j('.ic_equipo').css({'display':'block'});j('.ic_queh').css({'display':'block','background':'url(img/menu3.png)'});j('.ic_proyectos').css({'display':'block','background':'url(img/menu4.png)'});j('.ic_clientes').css({'display':'block','background':'url(img/menu5.png)'});j('.ic_contactenos').css({'display':'block','background':'url(img/menu6.png)'});j('.ic_nosotros').hover(function(){j('.ic_nosotros').css({'display':'block','background':'url(img/menu1a-h.png)'});},function(){j('.ic_nosotros').css({'display':'block','background':'url(img/menu1.png)'});});j('.ic_equipo').hover(function(){j('.ic_equipo').css('display','block');},function(){j('.ic_equipo').css('display','block');});j('.ic_queh').hover(function(){j('.ic_queh').css({'display':'block','background':'url(img/menu3a-h.png)'});},function(){j('.ic_queh').css({'display':'block','background':'url(img/menu3.png)'});});j('.ic_proyectos').hover(function(){j('.ic_proyectos').css({'display':'block','background':'url(img/menu4a-h.png)'});},function(){j('.ic_proyectos').css({'display':'block','background':'url(img/menu4.png)'});});j('.ic_clientes').hover(function(){j('.ic_clientes').css({'display':'block','background':'url(img/menu5a-h.png)'});},function(){j('.ic_clientes').css({'display':'block','background':'url(img/menu5.png)'});});j('.ic_contactenos').hover(function(){j('.ic_contactenos').css({'display':'block','background':'url(img/menu6a-h.png)'});},function(){j('.ic_contactenos').css({'display':'block','background':'url(img/menu6.png)'});});j('.ic_inicio').hover(function(e){j('.ic_inicio').css('background','url(img/mi2-h.png)');},function(e){j('.ic_inicio').css('background','url(img/mi2.png)');});}
					else if(anchorLink == 'servicios'){
						j('.i_fa').css('background','url(img/fa6.png)');
						j('.i_go').css('background','url(img/go6.png)');
						j('.i_yo').css('background','url(img/yo6.png)');
						j('.i_tw').css('background','url(img/tw6.png)');
						j('.i_pi').css('background','url(img/pi6.png)');
						j('.i_li').css('background','url(img/in6.png)');
						j('.i_bo').css('background','url(img/blo3.png)');
						j('.i_fa').hover(function(e){j(this).css('background','url(img/fa6-h.png)');},function(){j(this).css('background','url(img/fa6.png)');});
						j('.i_go').hover(function(e){j(this).css('background','url(img/go6-h.png)');},function(){j(this).css('background','url(img/go6.png)');});
						j('.i_yo').hover(function(e){j(this).css('background','url(img/yo6-h.png)');},function(){j(this).css('background','url(img/yo6.png)');});
						j('.i_tw').hover(function(e){j(this).css('background','url(img/tw6-h.png)');},function(){j(this).css('background','url(img/tw6.png)');});
						j('.i_pi').hover(function(e){j(this).css('background','url(img/pi6-h.png)');},function(){j(this).css('background','url(img/pi6.png)');});
						j('.i_li').hover(function(e){j(this).css('background','url(img/in6-h.png)');},function(){j(this).css('background','url(img/in6.png)');});
						j('.i_bo').hover(function(e){j(this).css('background','url(img/blo4-h.png)');},function(){j(this).css('background','url(img/blo4.png)');});
						j('.ic_inicio').css('background','url(img/mi3.png)');j('.ic_nosotros').css({'display':'block','background':'url(img/menu1b.png)'});j('.ic_equipo').css({'display':'block','background':'url(img/menu2b.png)'});j('.ic_queh').css({'display':'block'});j('.ic_proyectos').css({'display':'block','background':'url(img/menu4b.png)'});j('.ic_clientes').css({'display':'block','background':'url(img/menu5b.png)'});j('.ic_contactenos').css({'display':'block','background':'url(img/menu6b.png)'});j('.ic_nosotros').hover(function(){j('.ic_nosotros').css({'display':'block','background':'url(img/menu1b-h.png)'});},function(){j('.ic_nosotros').css({'display':'block','background':'url(img/menu1b.png)'});});j('.ic_equipo').hover(function(){j('.ic_equipo').css({'display':'block','background':'url(img/menu2b-h.png)'});},function(){j('.ic_equipo').css({'display':'block','background':'url(img/menu2b.png)'});});j('.ic_queh').hover(function(){j('.ic_queh').css({'display':'block'});},function(){j('.ic_queh').css({'display':'block'});});j('.ic_proyectos').hover(function(){j('.ic_proyectos').css({'display':'block','background':'url(img/menu4b-h.png)'});},function(){j('.ic_proyectos').css({'display':'block','background':'url(img/menu4b.png)'});});j('.ic_clientes').hover(function(){j('.ic_clientes').css({'display':'block','background':'url(img/menu5b-h.png)'});},function(){j('.ic_clientes').css({'display':'block','background':'url(img/menu5b.png)'});});j('.ic_contactenos').hover(function(){j('.ic_contactenos').css({'display':'block','background':'url(img/menu6b-h.png)'});},function(){j('.ic_contactenos').css({'display':'block','background':'url(img/menu6b.png)'});});j('.ic_inicio').hover(function(e){j('.ic_inicio').css('background','url(img/mi3-h.png)');},function(e){j('.ic_inicio').css('background','url(img/mi3.png)');});}
					else if(anchorLink == 'proyectos'){
						j('.i_fa').css('background','url(img/fa3.png)');
						j('.i_go').css('background','url(img/go3.png)');
						j('.i_yo').css('background','url(img/yo3.png)');
						j('.i_tw').css('background','url(img/tw3.png)');
						j('.i_pi').css('background','url(img/pi3.png)');
						j('.i_li').css('background','url(img/in3.png)');
						j('.i_bo').css('background','url(img/blo5.png)');
						j('.i_fa').hover(function(e){j(this).css('background','url(img/fa3-h.png)');},function(){j(this).css('background','url(img/fa3.png)');});
						j('.i_go').hover(function(e){j(this).css('background','url(img/go3-h.png)');},function(){j(this).css('background','url(img/go3.png)');});
						j('.i_yo').hover(function(e){j(this).css('background','url(img/yo3-h.png)');},function(){j(this).css('background','url(img/yo3.png)');});
						j('.i_tw').hover(function(e){j(this).css('background','url(img/tw3-h.png)');},function(){j(this).css('background','url(img/tw3.png)');});
						j('.i_pi').hover(function(e){j(this).css('background','url(img/pi3-h.png)');},function(){j(this).css('background','url(img/pi3.png)');});
						j('.i_li').hover(function(e){j(this).css('background','url(img/in3-h.png)');},function(){j(this).css('background','url(img/in3.png)');});
						j('.i_bo').hover(function(e){j(this).css('background','url(img/blo5-h.png)');},function(){j(this).css('background','url(img/blo5.png)');});
						j('.ic_inicio').css('background','url(img/mi4.png)');j('.ic_nosotros').css({'display':'block','background':'url(img/menu1c.png)'});j('.ic_equipo').css({'display':'block','background':'url(img/menu2c.png)'});j('.ic_queh').css({'display':'block','background':'url(img/menu3c.png)'});j('.ic_proyectos').css({'display':'block'});j('.ic_clientes').css({'display':'block','background':'url(img/menu5c.png)'});j('.ic_contactenos').css({'display':'block','background':'url(img/menu6c.png)'});j('.ic_nosotros').hover(function(){j('.ic_nosotros').css({'display':'block','background':'url(img/menu1c-h.png)'});},function(){j('.ic_nosotros').css({'display':'block','background':'url(img/menu1c.png)'});});j('.ic_equipo').hover(function(){j('.ic_equipo').css({'display':'block','background':'url(img/menu2c-h.png)'});},function(){j('.ic_equipo').css({'display':'block','background':'url(img/menu2c.png)'});});j('.ic_queh').hover(function(){j('.ic_queh').css({'display':'block','background':'url(img/menu3c-h.png)'});},function(){j('.ic_queh').css({'display':'block','background':'url(img/menu3c.png)'});});j('.ic_proyectos').hover(function(){j('.ic_proyectos').css({'display':'block'});},function(){j('.ic_proyectos').css({'display':'block'});});j('.ic_clientes').hover(function(){j('.ic_clientes').css({'display':'block','background':'url(img/menu5c-h.png)'});},function(){j('.ic_clientes').css({'display':'block','background':'url(img/menu5c.png)'});});j('.ic_contactenos').hover(function(){j('.ic_contactenos').css({'display':'block','background':'url(img/menu6c-h.png)'});},function(){j('.ic_contactenos').css({'display':'block','background':'url(img/menu6c.png)'});});j('.ic_inicio').hover(function(e){j('.ic_inicio').css('background','url(img/mi4-h.png)');},function(e){j('.ic_inicio').css('background','url(img/mi4.png)');});}
					else if(anchorLink == 'clientes'){
						j('.i_fa').css('background','url(img/fa4.png)');
						j('.i_go').css('background','url(img/go4.png)');
						j('.i_yo').css('background','url(img/yo4.png)');
						j('.i_tw').css('background','url(img/tw4.png)');
						j('.i_pi').css('background','url(img/pi4.png)');
						j('.i_li').css('background','url(img/in4.png)');
						j('.i_bo').css('background','url(img/blo2.png)');
						j('.i_fa').hover(function(e){j(this).css('background','url(img/fa4-h.png)');},function(){j(this).css('background','url(img/fa4.png)');});
						j('.i_go').hover(function(e){j(this).css('background','url(img/go4-h.png)');},function(){j(this).css('background','url(img/go4.png)');});
						j('.i_yo').hover(function(e){j(this).css('background','url(img/yo4-h.png)');},function(){j(this).css('background','url(img/yo4.png)');});
						j('.i_tw').hover(function(e){j(this).css('background','url(img/tw4-h.png)');},function(){j(this).css('background','url(img/tw4.png)');});
						j('.i_pi').hover(function(e){j(this).css('background','url(img/pi4-h.png)');},function(){j(this).css('background','url(img/pi4.png)');});
						j('.i_li').hover(function(e){j(this).css('background','url(img/in4-h.png)');},function(){j(this).css('background','url(img/in4.png)');});
						j('.i_bo').hover(function(e){j(this).css('background','url(img/blo6-h.png)');},function(){j(this).css('background','url(img/blo2.png)');});
						j('.ic_inicio').css('background','url(img/mi5.png)');j('.ic_nosotros').css({'display':'block','background':'url(img/menu1d.png)'});j('.ic_equipo').css({'display':'block','background':'url(img/menu2d.png)'});j('.ic_queh').css({'display':'block','background':'url(img/menu3d.png)'});j('.ic_proyectos').css({'display':'block','background':'url(img/menu4d.png)'});j('.ic_clientes').css({'display':'block'});j('.ic_contactenos').css({'display':'block','background':'url(img/menu6d.png)'});j('.ic_nosotros').hover(function(){j('.ic_nosotros').css({'display':'block','background':'url(img/menu1d-h.png)'});},function(){j('.ic_nosotros').css({'display':'block','background':'url(img/menu1d.png)'});});j('.ic_equipo').hover(function(){j('.ic_equipo').css({'display':'block','background':'url(img/menu2d-h.png)'});},function(){j('.ic_equipo').css({'display':'block','background':'url(img/menu2d.png)'});});j('.ic_queh').hover(function(){j('.ic_queh').css({'display':'block','background':'url(img/menu3d-h.png)'});},function(){j('.ic_queh').css({'display':'block','background':'url(img/menu3d.png)'});});j('.ic_proyectos').hover(function(){j('.ic_proyectos').css({'display':'block','background':'url(img/menu4d-h.png)'});},function(){j('.ic_proyectos').css({'display':'block','background':'url(img/menu4d.png)'});});j('.ic_clientes').hover(function(){j('.ic_clientes').css({'display':'block'});},function(){j('.ic_clientes').css({'display':'block'});});j('.ic_contactenos').hover(function(){j('.ic_contactenos').css({'display':'block','background':'url(img/menu6d-h.png)'});},function(){j('.ic_contactenos').css({'display':'block','background':'url(img/menu6d.png)'});});j('.ic_inicio').hover(function(e){j('.ic_inicio').css('background','url(img/mi5-h.png)');},function(e){j('.ic_inicio').css('background','url(img/mi5.png)');});}
					else if(anchorLink == 'contactenos'){
						j('.i_fa').css('background','url(img/fa1.png)');
						j('.i_go').css('background','url(img/go1.png)');
						j('.i_yo').css('background','url(img/yo1.png)');
						j('.i_tw').css('background','url(img/tw1.png)');
						j('.i_pi').css('background','url(img/pi1.png)');
						j('.i_li').css('background','url(img/in1.png)');
						j('.i_bo').css('background','url(img/blo2.png)');
						j('.i_fa').hover(function(e){j(this).css('background','url(img/fa5-h.png)');},function(){j(this).css('background','url(img/fa1.png)');});
						j('.i_go').hover(function(e){j(this).css('background','url(img/go5-h.png)');},function(){j(this).css('background','url(img/go1.png)');});
						j('.i_yo').hover(function(e){j(this).css('background','url(img/yo5-h.png)');},function(){j(this).css('background','url(img/yo1.png)');});
						j('.i_tw').hover(function(e){j(this).css('background','url(img/tw5-h.png)');},function(){j(this).css('background','url(img/tw1.png)');});
						j('.i_pi').hover(function(e){j(this).css('background','url(img/pi5-h.png)');},function(){j(this).css('background','url(img/pi1.png)');});
						j('.i_li').hover(function(e){j(this).css('background','url(img/in5-h.png)');},function(){j(this).css('background','url(img/in1.png)');});
						j('.i_bo').hover(function(e){j(this).css('background','url(img/blo7-h.png)');},function(){j(this).css('background','url(img/blo2.png)');});
						j('.ic_inicio').css('background','url(img/mi6.png)');j('.ic_nosotros').css({'display':'block','background':'url(img/menu1.png)'});j('.ic_equipo').css({'display':'block','background':'url(img/menu2.png)'});j('.ic_queh').css({'display':'block','background':'url(img/menu3.png)'});j('.ic_proyectos').css({'display':'block','background':'url(img/menu4.png)'});j('.ic_clientes').css({'display':'block','background':'url(img/menu5.png)'});j('.ic_contactenos').css({'display':'block'});j('.ic_nosotros').hover(function(){j('.ic_nosotros').css({'display':'block','background':'url(img/menu1e-h.png)'});},function(){j('.ic_nosotros').css({'display':'block','background':'url(img/menu1.png)'});});j('.ic_equipo').hover(function(){j('.ic_equipo').css({'display':'block','background':'url(img/menu2e-h.png)'});},function(){j('.ic_equipo').css({'display':'block','background':'url(img/menu2.png)'});});j('.ic_queh').hover(function(){j('.ic_queh').css({'display':'block','background':'url(img/menu3e-h.png)'});},function(){j('.ic_queh').css({'display':'block','background':'url(img/menu3.png)'});});j('.ic_proyectos').hover(function(){j('.ic_proyectos').css({'display':'block','background':'url(img/menu4e-h.png)'});},function(){j('.ic_proyectos').css({'display':'block','background':'url(img/menu4.png)'});});j('.ic_clientes').hover(function(){j('.ic_clientes').css({'display':'block','background':'url(img/menu5e-h.png)'});},function(){j('.ic_clientes').css({'display':'block','background':'url(img/menu5.png)'});});j('.ic_contactenos').hover(function(){j('.ic_contactenos').css({'display':'block'});},function(){j('.ic_contactenos').css({'display':'block'});});j('.ic_inicio').hover(function(e){j('.ic_inicio').css('background','url(img/mi6-h.png)');},function(e){j('.ic_inicio').css('background','url(img/mi6.png)');});}
					else{j('.i_fa,.i_go,.i_yo,.i_tw,.i_pi,.i_li,.i_bo').removeAttr('style');j('.i_fa,.i_go,.i_yo,.i_tw,.i_pi,.i_li').hover(function(){j(this).removeAttr('style');});j('.ic_inicio,.ic_nosotros,.ic_equipo,.ic_queh,.ic_proyectos,.ic_clientes,.ic_contactenos').removeAttr('style');j('.ic_inicio,.ic_nosotros,.ic_equipo,.ic_queh,.ic_proyectos,.ic_clientes,.ic_contactenos').hover(function(){j(this).removeAttr('style');});}
				}
				if(anchorLink == '' || anchorLink == 'inicio'){j('.re-m').css({'display': 'none'});j('.ico_inicio01').css({'display': 'none'});j('.mr-01').removeAttr('style');j('.mr-ul').removeAttr('style');j('.mr-ul').removeClass('bef-i bef-n bef-e bef-s bef-p bef-cl bef-c');j('.mr-ul').addClass('bef-i');j('.mr-ul:before').removeAttr('style');j('.mr-ul li').removeAttr('style');/*j('.ico_inicio01').removeAttr('style');*/j('.ico_nosotros01 i').removeAttr('style');j('.ico_equipo01 i').removeAttr('style');j('.ico_queh01 i').removeAttr('style');j('.ico_proyectos01 i').removeAttr('style');j('.ico_clientes01 i').removeAttr('style');j('.ico_contactenos01 i').removeAttr('style');}
				else{
					j('.re-m').css({'display': 'block'});
					if(anchorLink == 'menu'){j('.ico_inicio01').css({'display': 'none'});j('.mr-01').css({'display': 'none'});}
					if(anchorLink == 'nosotros'){j('.ico_inicio01').css({'display': 'block'});j('.mr-ul').removeClass('bef-i bef-m bef-e bef-s bef-p bef-cl bef-c');j('.mr-ul').addClass('bef-n');j('.mr-01').css({'display': 'inline-block'});j('.mr-01').css({'background': 'rgba(249,35,44,0.6)'});j('.mr-ul').css({'background': 'rgba(155,23,22,0.94)','border-radius': '7px 0px 0px 0px'});j('.mr-ul li').css({'border-bottom': '1px solid rgba(210, 20, 26, 0.52)'});j('.ico_nosotros01 i').css({'background':'url(img/menu1-active.png)'});j('.ico_equipo01 i').css({'background': 'url(../img/menu2.png)'});j('.ico_queh01 i').css({'background':'url(img/menu3.png)'});j('.ico_proyectos01 i').css({'background':'url(img/menu4.png)'});j('.ico_clientes01 i').css({'background':'url(img/menu5.png)'});j('.ico_contactenos01 i').css({'background':'url(img/menu6.png)'});j('.ico_nosotros01').hover(function(){j('.ico_nosotros01 i').css({'background':'url(img/menu1-active.png)'});});j('.ico_equipo01').hover(function(){j('.ico_equipo01 i').css({'background':'url(img/menu2-h.png)'});},function(){j('.ico_equipo01 i').css({'background':'url(img/menu2.png)'});});j('.ico_queh01').hover(function(){j('.ico_queh01 i').css({'background':'url(img/menu3-h.png)'});},function(){j('.ico_queh01 i').css({'background':'url(img/menu3.png)'});});j('.ico_proyectos01').hover(function(){j('.ico_proyectos01 i').css({'background':'url(img/menu4-h.png)'});},function(){j('.ico_proyectos01 i').css({'background':'url(img/menu4.png)'});});j('.ico_clientes01').hover(function(){j('.ico_clientes01 i').css({'background':'url(img/menu5-h.png)'});},function(){j('.ico_clientes01 i').css({'background':'url(img/menu5.png)'});});j('.ico_contactenos01').hover(function(){j('.ico_contactenos01 i').css({'background':'url(img/menu6-h.png)'});},function(){j('.ico_contactenos01 i').css({'background':'url(img/menu6.png)'});});}
					else if (anchorLink == 'equipo'){j('.mr-ul').removeClass('bef-i bef-n bef-s bef-p bef-cl bef-c');j('.mr-ul').addClass('bef-e');j('.mr-01').css({'display': 'inline-block'});j('.mr-01').css({'background': 'rgba(30, 208, 194, 0.6)'});j('.mr-ul').css({'background': 'rgba(1, 120, 112, 0.94)','border-radius': '7px 0px 0px 0px'});j('.mr-ul li').css({'border-bottom': '1px solid rgba(13, 173, 161, 0.49)'});j('.ico_inicio01').css({'display': 'block','background':'url(img/mi2.png)'});j('.ico_nosotros01 i').css({'background':'url(img/menu1.png)'});j('.ico_equipo01 i').css({'background': 'url(../img/menu2-active.png)'});j('.ico_queh01 i').css({'background':'url(img/menu3.png)'});j('.ico_proyectos01 i').css({'background':'url(img/menu4.png)'});j('.ico_clientes01 i').css({'background':'url(img/menu5.png)'});j('.ico_contactenos01 i').css({'background':'url(img/menu6.png)'});j('.ico_equipo01').hover(function(){j('.ico_equipo01 i').css({'background': 'url(../img/menu2-active.png)'});});j('.ico_nosotros01').hover(function(){j('.ico_nosotros01 i').css({'background':'url(img/menu1a-h.png)'});},function(){j('.ico_nosotros01 i').css({'background':'url(img/menu1.png)'});});j('.ico_queh01').hover(function(){j('.ico_queh01 i').css({'background':'url(img/menu3a-h.png)'});},function(){j('.ico_queh01 i').css({'background':'url(img/menu3.png)'});});j('.ico_proyectos01').hover(function(){j('.ico_proyectos01 i').css({'background':'url(img/menu4a-h.png)'});},function(){j('.ico_proyectos01 i').css({'background':'url(img/menu4.png)'});});j('.ico_clientes01').hover(function(){j('.ico_clientes01 i').css({'background':'url(img/menu5a-h.png)'});},function(){j('.ico_clientes01 i').css({'background':'url(img/menu5.png)'});});j('.ico_contactenos01').hover(function(){j('.ico_contactenos01 i').css({'background':'url(img/menu6a-h.png)'});},function(){j('.ico_contactenos01 i').css({'background':'url(img/menu6.png)'});});j('.ico_inicio01').hover(function(e){j('.ico_inicio01').css('background','url(img/mi2-h.png)');},function(e){j('.ico_inicio01').css('background','url(img/mi2.png)');});}
					else if (anchorLink == 'servicios'){j('.mr-ul').removeClass('bef-i bef-n bef-e bef-p bef-cl bef-c');j('.mr-ul').addClass('bef-s');j('.mr-01').css({'display': 'inline-block'});j('.mr-01').css({'background': 'rgba(255,222,37,0.7)'});j('.mr-ul').css({'background': 'rgba(207, 162, 4, 0.94)','border-radius': '7px 0px 0px 0px'});j('.mr-ul li').css({'border-bottom': '1px solid rgba(252, 210, 54, 0.49)'});j('.ico_inicio01').css({'display': 'block','background':'url(img/mi3.png)'});j('.ico_nosotros01 i').css({'background':'url(img/menu1.png)'});j('.ico_equipo01 i').css({'background':'url(img/menu2.png)'});j('.ico_queh01 i').css({'background': 'url(../img/menu3-active.png)'});j('.ico_proyectos01 i').css({'background':'url(img/menu4.png)'});j('.ico_clientes01 i').css({'background':'url(img/menu5.png)'});j('.ico_contactenos01 i').css({'background':'url(img/menu6.png)'});j('.ico_nosotros01').hover(function(){j('.ico_nosotros01 i').css({'background':'url(img/menu1ba-h.png)'});},function(){j('.ico_nosotros01 i').css({'background':'url(img/menu1.png)'});});j('.ico_queh01').hover(function(){j('.ico_queh01 i').css({'background': 'url(../img/menu3-active.png)'});});j('.ico_equipo01').hover(function(){j('.ico_equipo01 i').css({'background':'url(img/menu2ba-h.png)'});},function(){j('.ico_equipo01 i').css({'background':'url(img/menu2.png)'});});j('.ico_proyectos01').hover(function(){j('.ico_proyectos01 i').css({'background':'url(img/menu4ba-h.png)'});},function(){j('.ico_proyectos01 i').css({'background':'url(img/menu4.png)'});});j('.ico_clientes01').hover(function(){j('.ico_clientes01 i').css({'background':'url(img/menu5ba-h.png)'});},function(){j('.ico_clientes01 i').css({'background':'url(img/menu5.png)'});});j('.ico_contactenos01').hover(function(){j('.ico_contactenos01 i').css({'background':'url(img/menu6ba-h.png)'});},function(){j('.ico_contactenos01 i').css({'background':'url(img/menu6.png)'});});j('.ico_inicio01').hover(function(e){j('.ico_inicio01').css('background','url(img/mi3-h.png)');},function(e){j('.ico_inicio01').css('background','url(img/mi3.png)');});}
					else if (anchorLink == 'proyectos'){j('.mr-ul').removeClass('bef-i bef-n bef-e bef-s bef-cl bef-c');j('.mr-ul').addClass('bef-p');j('.mr-01').css({'display': 'inline-block'});j('.mr-01').css({'background': 'rgba(171,169,166,0.7)'});j('.mr-ul').css({'background': 'rgba(149, 146, 141, 0.94)','border-radius': '7px 0px 0px 0px'});j('.mr-ul li').css({'border-bottom': '1px solid rgba(182, 181, 178, 0.49)'});j('.ico_inicio01').css({'display': 'block','background':'url(img/mi4.png)'});j('.ico_nosotros01 i').css({'background':'url(img/menu1.png)'});j('.ico_equipo01 i').css({'background':'url(img/menu2.png)'});j('.ico_queh01 i').css({'background':'url(img/menu3.png)'});j('.ico_proyectos01 i').css({'background': 'url(../img/menu4-active.png)'});j('.ico_clientes01 i').css({'background':'url(img/menu5.png)'});j('.ico_contactenos01 i').css({'background':'url(img/menu6.png)'});j('.ico_nosotros01').hover(function(){j('.ico_nosotros01 i').css({'background':'url(img/menu1ca-h.png)'});},function(){j('.ico_nosotros01 i').css({'background':'url(img/menu1.png)'});});j('.ico_equipo01').hover(function(){j('.ico_equipo01 i').css({'background':'url(img/menu2ca-h.png)'});},function(){j('.ico_equipo01 i').css({'background':'url(img/menu2.png)'});});j('.ico_queh01').hover(function(){j('.ico_queh01 i').css({'background':'url(img/menu3ca-h.png)'});},function(){j('.ico_queh01 i').css({'background':'url(img/menu3.png)'});});j('.ico_proyectos01').hover(function(){j('.ico_proyectos01 i').css({'background': 'url(../img/menu4-active.png)'});});j('.ico_clientes01').hover(function(){j('.ico_clientes01 i').css({'background':'url(img/menu5ca-h.png)'});},function(){j('.ico_clientes01 i').css({'background':'url(img/menu5.png)'});});j('.ico_contactenos01').hover(function(){j('.ico_contactenos01 i').css({'background':'url(img/menu6ca-h.png)'});},function(){j('.ico_contactenos01 i').css({'background':'url(img/menu6.png)'});});j('.ico_inicio01').hover(function(e){j('.ico_inicio01').css('background','url(img/mi4-h.png)');},function(e){j('.ico_inicio01').css('background','url(img/mi4.png)');});}
					else if (anchorLink == 'clientes'){j('.mr-ul').removeClass('bef-i bef-n bef-e bef-s bef-p bef-c');j('.mr-ul').addClass('bef-cl');j('.mr-01').css({'display': 'inline-block'});j('.mr-01').css({'background': 'rgba(166,163,161,0.7)'});j('.mr-ul').css({'background': 'rgba(95, 92, 92, 0.94)','border-radius': '7px 0px 0px 0px'});j('.mr-ul li').css({'border-bottom': '1px solid rgba(133, 130, 128, 0.49)'});j('.ico_inicio01').css({'display': 'block','background':'url(img/mi5.png)'});j('.ico_nosotros01 i').css({'background':'url(img/menu1d.png)'});j('.ico_equipo01 i').css({'background':'url(img/menu2d.png)'});j('.ico_queh01 i').css({'background':'url(img/menu3d.png)'});j('.ico_proyectos01 i').css({'background':'url(img/menu4d.png)'});j('.ico_clientes01 i').css({'background': 'url(../img/menu5-active.png)'});j('.ico_contactenos01 i').css({'background':'url(img/menu6d.png)'});j('.ico_nosotros01').hover(function(){j('.ico_nosotros01 i').css({'background':'url(img/menu1d-h.png)'});},function(){j('.ico_nosotros01 i').css({'background':'url(img/menu1d.png)'});});j('.ico_equipo01').hover(function(){j('.ico_equipo01 i').css({'background':'url(img/menu2d-h.png)'});},function(){j('.ico_equipo01 i').css({'background':'url(img/menu2d.png)'});});j('.ico_queh01').hover(function(){j('.ico_queh01 i').css({'background':'url(img/menu3d-h.png)'});},function(){j('.ico_queh01 i').css({'background':'url(img/menu3d.png)'});});j('.ico_proyectos01').hover(function(){j('.ico_proyectos01 i').css({'background':'url(img/menu4d-h.png)'});},function(){j('.ico_proyectos01 i').css({'background':'url(img/menu4d.png)'});});j('.ico_clientes01').hover(function(){j('.ico_clientes01 i').css({'background': 'url(../img/menu5-active.png)'});});j('.ico_contactenos01').hover(function(){j('.ico_contactenos01 i').css({'background':'url(img/menu6d-h.png)'});},function(){j('.ico_contactenos01 i').css({'background':'url(img/menu6d.png)'});});j('.ico_inicio01').hover(function(e){j('.ico_inicio01').css('background','url(img/mi5-h.png)');},function(e){j('.ico_inicio01').css('background','url(img/mi5.png)');});}
					else if(anchorLink == 'contactenos'){j('.mr-ul').removeClass('bef-i bef-n bef-e bef-s bef-p bef-cl');j('.mr-ul').addClass('bef-c');j('.mr-01').css({'display': 'inline-block'});j('.mr-01').css({'background': 'rgba(249, 107, 24, 0.7)'});j('.mr-ul').css({'background': 'rgba(105, 38, 7, 0.94)','border-radius': '7px 0px 0px 0px'});j('.mr-ul li').css({'border-bottom': '1px solid rgba(121,62,22,0.8)'});j('.ico_inicio01').css({'display': 'block','background':'url(img/mi6.png)'});j('.ico_nosotros01 i').css({'background':'url(img/menu1.png)'});j('.ico_equipo01 i').css({'background':'url(img/menu2.png)'});j('.ico_queh01 i').css({'background':'url(img/menu3.png)'});j('.ico_proyectos01 i').css({'background':'url(img/menu4.png)'});j('.ico_clientes01 i').css({'background':'url(img/menu5.png)'});j('.ico_contactenos01 i').css({'background': 'url(../img/menu6-active.png)'});j('.ico_nosotros01').hover(function(){j('.ico_nosotros01 i').css({'background':'url(img/menu1e-h.png)'});},function(){j('.ico_nosotros01 i').css({'background':'url(img/menu1.png)'});});j('.ico_equipo01').hover(function(){j('.ico_equipo01 i').css({'background':'url(img/menu2e-h.png)'});},function(){j('.ico_equipo01 i').css({'background':'url(img/menu2.png)'});});j('.ico_queh01').hover(function(){j('.ico_queh01 i').css({'background':'url(img/menu3e-h.png)'});},function(){j('.ico_queh01 i').css({'background':'url(img/menu3.png)'});});j('.ico_proyectos01').hover(function(){j('.ico_proyectos01 i').css({'background':'url(img/menu4e-h.png)'});},function(){j('.ico_proyectos01 i').css({'background':'url(img/menu4.png)'});});j('.ico_clientes01').hover(function(){j('.ico_clientes01 i').css({'background':'url(img/menu5e-h.png)'});},function(){j('.ico_clientes01 i').css({'background':'url(img/menu5.png)'});});j('.ico_contactenos01').hover(function(){j('.ico_contactenos01 i').css({'background': 'url(../img/menu6-active.png)'});});j('.ico_inicio01').hover(function(e){j('.ico_inicio01').css('background','url(img/mi6-h.png)');},function(e){j('.ico_inicio01').css('background','url(img/mi6.png)');});}				
				}
				if(anchorLink == '' || anchorLink == 'inicio'){setTimeout(function(){j('.logo').css('display','block');j('.logo').addClass('animated zoomIn');},500);setTimeout(function(){j('.redes li:first-child').fadeIn(1500);},800);setTimeout(function(){j('.redes li:nth-child(2)').fadeIn(1500);},1100);setTimeout(function(){j('.redes li:nth-child(3)').fadeIn(1500);},1400);setTimeout(function(){j('.redes li:nth-child(4)').fadeIn(1500);},1700);setTimeout(function(){j('.redes li:nth-child(5)').fadeIn(1500);},2100);setTimeout(function(){j('.redes li:last-child').fadeIn(1500);},2400);}
				else{j('.logo,.redes li:first-child,.redes li:nth-child(2),.redes li:nth-child(3),.redes li:nth-child(4),.redes li:nth-child(5),.redes li:last-child').css({display: 'none'});}
				if(anchorLink == 'menu'){setTimeout(function() {j(".nosotros p, .nosotros i").fadeIn(1500);},300);setTimeout(function() {j(".equipo p, .equipo i").fadeIn(1500);},700);setTimeout(function() {j(".que-hacemos p, .que-hacemos i").fadeIn(1500);},1200);setTimeout(function() {j(".proyectos p, .proyectos i").fadeIn(1500);},1700);setTimeout(function() {j(".clientes p, .clientes i").fadeIn(1500);},2200);setTimeout(function() {j(".contactenos p, .contactenos i").fadeIn(1500);},2700);setTimeout(function() {j(".nosotros i,.equipo i,.que-hacemos i,.proyectos i,.contactenos i,.clientes i").css({'-webkit-transition': 'all 1s ease-in-out','-moz-transition': 'all 1s ease-in-out','-o-transition': 'all 1s ease-in-out','transition': 'all 1s ease-in-out'});},3500);}					
				else{
					j('.nosotros p, .nosotros i').css({'display':'none','-webkit-transition': 'all 0s ease-in-out','-moz-transition': 'all 0s ease-in-out','-o-transition': 'all 0s ease-in-out','transition': 'all 0s ease-in-out'});
					j('.equipo p, .equipo i').css({'display':'none','-webkit-transition': 'all 0s ease-in-out','-moz-transition': 'all 0s ease-in-out','-o-transition': 'all 0s ease-in-out','transition': 'all 0s ease-in-out'});
					j('.que-hacemos p, .que-hacemos i').css({'display':'none','-webkit-transition': 'all 0s ease-in-out','-moz-transition': 'all 0s ease-in-out','-o-transition': 'all 0s ease-in-out','transition': 'all 0s ease-in-out'});
					j('.proyectos p, .proyectos i').css({'display':'none','-webkit-transition': 'all 0s ease-in-out','-moz-transition': 'all 0s ease-in-out','-o-transition': 'all 0s ease-in-out','transition': 'all 0s ease-in-out'});
					j('.clientes p, .clientes i').css({'display':'none','-webkit-transition': 'all 0s ease-in-out','-moz-transition': 'all 0s ease-in-out','-o-transition': 'all 0s ease-in-out','transition': 'all 0s ease-in-out'});
					j('.contactenos p, .contactenos i').css({'display':'none','-webkit-transition': 'all 0s ease-in-out','-moz-transition': 'all 0s ease-in-out','-o-transition': 'all 0s ease-in-out','transition': 'all 0s ease-in-out'});
				}
				if(anchorLink == 'equipo'){setTimeout(function() {j('.uno').css('display','block');j('.uno').addClass('animated1 slideInLeft');},200);setTimeout(function() {j('.im-1').css('display','block');j('.im-1').addClass('animated1 slideInDown');},300);setTimeout(function() {j('.dos').css('display','block');j('.dos').addClass('animated1 slideInLeft');},400);setTimeout(function() {j('.tres').css('display','block');j('.tres').addClass('animated1 slideInRight');},500);setTimeout(function() {j('.cuatro').css('display','block');j('.cuatro').addClass('animated1 slideInRight');},600);setTimeout(function() {j('.im-2 img:first-child').css('display','block');j('.im-2 img:first-child').addClass('animated1 slideInUp');},700);setTimeout(function() {j('.im-2 img:last-child').css('display','block');j('.im-2 img:last-child').addClass('animated1 slideInRight');},800);}
				else{j('.uno,.im-1,.dos,.tres,.cuatro,.im-2 img:first-child,.im-2 img:last-child').css({'display':'none'});}
				if(anchorLink == 'nosotros'){setTimeout(function(){j('.img-s').css('display','block');j('.img-s').addClass('animated zoomIn');},500);setTimeout(function(){j('.line_1').css('display','block');j('.line_1').addClass('animated upone')},900);setTimeout(function(){j('.txt1').css({'display':'block'});j('.txt1').addClass('animated zoomIn');},1000);setTimeout(function(){j('.line_2').css('display','block');j('.line_2').addClass('animated uptwo')},1400);setTimeout(function(){j('.txt2').css({'display':'block'});j('.txt2').addClass('animated zoomIn');},1500);setTimeout(function(){j('.line_4').css('display','block');j('.line_4').addClass('animated downtwo')},1900);setTimeout(function(){j('.txt4').css({'display':'block'});j('.txt4').addClass('animated zoomIn');},2000);setTimeout(function(){j('.line_3').css('display','block');j('.line_3').addClass('animated downone')},2400);setTimeout(function(){j('.txt3').css({'display':'block'});j('.txt3').addClass('animated zoomIn');},2500);}
				else{j('.img-s,.line_1,.txt1,.line_2,.txt2,.line_3,.txt4,.line_4,.txt3').css({'display' : 'none'});}
				if(anchorLink == 'servicios'){j('#ol-style').html('<style type="text/css">.fancybox-skin{padding-left: 0px !important;padding-top: 0px !important;padding-bottom: 0px !important;padding-right: 0px !important;background: #ffffff !important;box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.28) !important;}.fancybox-close {top: 0px !important;right: 0px !important;background: url(img/cerrar-2.png) !important;width: 50px !important;height: 51px !important;}</style>');}
				else{j('#ol-style').html('');}
			},
			//onLeave: function(index, nextIndex, direction){if(index == 2 && direction == 'down'){}if(index == 2 && direction == 'up'){}}		
		});
});