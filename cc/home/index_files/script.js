j(document).ready(function(){j(".topbar").dropdown();j("a.helpLink").bind("click",function(e){j(this).next('.help-popover').toggleClass('open');e.preventDefault();});j(".help-popover a.close").bind('click',function(e){j(this).parent().parent().parent().removeClass('open');e.preventDefault();});j(function(){j("#slides").slides({generateNextPrev:true,next:'next',previous:'prev',pagination:true,paginationClass:'frames',preload:false,preloadImage:'img/loading.gif',play:4000,pause:10000,effect:'fade',fadeSpeed:500,crossfade:'true',fadeEasing:'easeOutQuad',hoverPause:true,animationStart:function(current){j('.caption').animate({bottom:-100},100);if(window.console&&console.log){console.log('animationStart on slide: ',current);};},animationComplete:function(current){j('.caption').animate({bottom:0},200);if(window.console&&console.log){console.log('animationComplete on slide: ',current);};},slidesLoaded:function(){j('.caption').animate({bottom:0},200);}});});j(function(){j('#case').slides({container:'studies',generateNextPrev:false,paginationClass:'frames',play:15000,pause:15000,effect:'fade',fadeSpeed:0});});j(function(){j("#store").slides({container:'swag',generateNextPrev:false,pagination:false,generatePagination:false,play:7000,pause:7000,effect:'fade',fadeSpeed:500,crossfade:'true',fadeEasing:'easeOutQuad',hoverPause:true});});});if(navigator.userAgent.match(/MSIE\s6/)){j(window).load(j('div.carousel').css('display','none'));}else{j(window).load(j('div.carousel').css('display','block'));}