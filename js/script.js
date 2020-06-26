$(function(){
	/*메인메뉴>사이드메뉴 슬라이드*/
	$(".mainMenu>li").on({
		'mouseenter':function(){
			$(this).children('a').css({color:"green"});
			$(this).children('.subMenu').stop().slideDown(500);
		},
		'mouseleave':function(){
			$(this).children('a').css({color:"#000"});
			$(this).children('.subMenu').stop().slideUp(500);
		}
	});	
	$(".twice>li").on({
		'mouseenter':function(){
			$(this).children('ul').stop().slideDown(500);
		},
		'mouseleave':function(){
			$(this).children('ul').stop().slideUp(1000);
		}
	});
	$(".subMenu li").on({
		'mouseenter':function(){
			$(this).children('a').css({color:"green", fontWeight:"bold"});
		},
		'mouseleave':function(){
			$(this).children('a').css({color:"#000", fontWeight:"normal"});
		}
	});
	
	/*section2 공지사항 메뉴 변경*/
	$(".infoTitle li")
	$(".infoTitle li").click(function(){
		var a=$(this).index();
		console.log(a);
		var color=$("#detail>div").eq(a).children('div').children('h1').css("color");
		/*더보기버튼(plus)*/
		$('.infoTitle li').children('.plus').removeClass('none');
		$('.infoTitle li').children('a').css({color:"#000"});
		$(this).children('.plus').addClass('none');
		$(this).children('a').css({color:color});
		/*detail 영역*/
		$('#detail>div').hide();
		$('#detail>div').eq(a).show();
		return false;
	});
	/*section2 공지사항 세부영역 변경*/
	$("#detail div ul li a").on({
		'mouseenter':function(){
			$(this).stop().animate({borderColor:"#000", backgroundColor:"#FAEBD7"},300);
		},
		'mouseleave':function(){
			$(this).stop().animate({borderColor:"#aaa", backgroundColor:"#fff"},100);
		}
	});	
	
	/*section2 sns영역*/
	$(".snsIcon li").click(function(){
		var snsIcon=$(this).index();
		console.log(snsIcon);
		$(this).siblings().children('i').removeClass('click');
		$(this).children('i').addClass('click');
		$("#sns_area>li").eq(snsIcon).show();
		$("#sns_area>li").eq(snsIcon).siblings().hide();
	});
	$(".snsIcon li").on({
		'mouseenter':function(){
			$(this).children().children().stop().animate({color:"#008000"},300);
		},
		'mouseleave':function(){
			$(this).children().children().stop().animate({color:"rgba(0,0,0,0.7)"},100);
		}
	});	
	
	/*section3 빠른메뉴 영역*/
	 $(".goWrap ul li").on({
		'mouseenter':function(){
			$(this).children().children().stop().animate({color:"#008000"},300);
		},
		'mouseleave':function(){
			$(this).children().children().stop().animate({color:"#666"},100);
		}
	});	
		//빠른메뉴 슬라이드
	$("#go .fa-caret-right").click(function(){
		var right=parseInt($("#go ul").css('left'));
		console.log(right);
		if(right==-520){
			$(this).css({opacity:"0"});
			$("#go ul").animate({left:right-130},500);
			return;
		}
			$(this).css({opacity:"1"});
			$("#go .fa-caret-left").css({opacity:"1"});
			$("#go ul").animate({left:right-130},500);
	});

	$("#go .fa-caret-left").click(function(){
		var right=parseInt($("#go ul").css('left'));
		console.log(right);
		$(this).css({opacity:"0"});
		if(right==-130){
			$(this).css({opacity:"0"});
			$("#go ul").animate({left:right+130},500);
			return;
		}else{
			$(this).css({opacity:"1"});
			$("#go .fa-caret-right").css({opacity:"1"});
			$("#go ul").animate({left:right+130},500);
		}		
	});
	
	/*section3 알림창 slide*/
		$(".slide a").each(function(aa){
			$(this).css({left:259*aa});
		});
		/*
		setInterval(function(){
			$(".slide a").each(function(){
				var t = parseInt($(this).css("left"));
				var tLeft = t-259;
				$(this).animate({left:tLeft},1000, function(){
						if(tLeft==-1036){
								$(this).css("left",518);
							}
						});
					});
				},4000);*/
		var timer = setInterval(function(){
			$(".slide a").each(function(){
				var t = parseInt($(this).css("left"));
				var tLeft = t-259;
				$(this).animate({left:tLeft},1000, function(){
						if(tLeft==-1036){
								$(this).css("left",518);
							}
						});
					});
				},4000);
		
		
		$(".fa-step-backward").click(function(){
			$(".fa-pause-circle").hide();
			$(".fa-play-circle").show();
			clearInterval(timer);
			$(".slide a").each(function(){
				var t = parseInt($(this).css("left"));
				var tLeft = t+259;
				console.log(tLeft);
				$(this).stop().animate({left:tLeft},1000, function(){
						if(tLeft==1295){
								$(this).css("left",-259);
							}
						});
					});
		});
		$(".fa-step-forward").click(function(){
			$(".fa-pause-circle").hide();
			$(".fa-play-circle").show();
			clearInterval(timer);
			$(".slide a").each(function(){
				var t = parseInt($(this).css("left"));
				var tLeft = t-259;
				$(this).stop().animate({left:tLeft},1000, function(){
						if(tLeft==-1036){
								$(this).css("left",518);
							}
						});
					});
		});
		$(".fa-pause-circle").click(function(){
			$(this).hide();
			$(".fa-play-circle").show();
			clearInterval(timer);
		});
		$(".fa-play-circle").click(function(){
			$(this).hide();
			$(".fa-pause-circle").show();
			
			timer = setInterval(function(){
			$(".slide a").each(function(){
				var t = parseInt($(this).css("left"));
				var tLeft = t-259;
				$(this).animate({left:tLeft},1000, function(){
						if(tLeft==-1036){
								$(this).css("left",518);
							}
						});
					});
				},4000);
		});
	
	/*footer*/
	$(".target_name").click(function(){
		var targetIndex=$(this).index();
		console.log(targetIndex);
		$('.target').eq(targetIndex).siblings().fadeOut(1);
		$('.target').eq(targetIndex).siblings().animate({height:0},50);
		$('.target').eq(targetIndex).fadeIn(5);
		$('.target').eq(targetIndex).animate({height:"400px"},200);
	});
	$(".target_body li").on({
		'mouseenter':function(){
			$(this).stop().animate({borderColor:"#000"},300);
		},
		'mouseleave':function(){
			$(this).stop().animate({borderColor:"#aaa"},100);
		}
	});	
	$("	.target_close").click(function(){
		$('.target').fadeOut(1);
		$('.target').animate({height:0},50);
		return false;
	});

	
}); //스크립트 끝