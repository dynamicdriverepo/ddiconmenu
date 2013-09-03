/* DD Icon Menu
* Created: Aug 30th, 2013 by DynamicDrive.com. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/

jQuery.noConflict()

jQuery.extend(jQuery.easing, {  //see http://gsgd.co.uk/sandbox/jquery/easing/
	easeOutBack:function(x, t, b, c, d, s){
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	}
})

var ddiconmenu={
	startzindex:100,
	wrapperoffset:[2,20], //additional width and height to add to outer wrapper of drop down menus to accomodate CSS drop down shadow, if any
	ismobile:navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null, //boolean check for popular mobile browsers,
	submenuids : [], // ids of sub menus processed, to ensure each sub menu is not associated with more than 1 anchor link
	transform: typeof jQuery(document.documentElement).css('transform') != "undefined", // test for support for CSS3 transform

	init:function(setting){
		var $=jQuery
		var s=$.extend({fx:'slide', easing:'easeInOutSine', dur:'normal', hidedelay:200, trigger:'mouseenter'}, setting)
		if (s.fx=="none") //if fx is disabled, bypass animation
			s.dur=0
		var $mainmenu=$('#'+s.menuid)
		$anchors=($mainmenu.attr('rel'))? $mainmenu : $mainmenu.find('*[rel]')
		function buildmenu($anchors){
			$anchors.each(function(){ //loop through anchor links
				var $anchor=$(this)
				var relvalue=$anchor.attr('rel')
				if (/\[title\]/i.test(relvalue)){ // if rel's value is [title], meaning its contents should just be title attribute
					if ($anchor.attr('title')!=''){ // if title attribute is defined
						var $submenu=$('<div class="iconsubmenu icontooltip" style="position:absolute; visibility:hidden">' + $anchor.attr('title') + '</div>').appendTo(document.body)
					}
					else{
						return
					}
				}
				else{
					var $submenu=$('#'+relvalue) //extract "submenuid" to reference submenu
							.css({position:'absolute'})
					if ($.inArray(relvalue, ddiconmenu.submenuids) != -1){ // if this sub menu has already been initialized and added to a previous anchor
						$submenu=$submenu.clone().attr('id', '').appendTo(document.body)
					}
				}
				$submenu.wrap('<div class="subwrapper" style="z-index:'+ddiconmenu.startzindex+';position:absolute;top:0;left:0;visibility:hidden"><div style="position:absolute;overflow:hidden;left:0;top:0;width:100%;height:100%;"></div></div>')
					.css({visibility:'inherit', left:-$submenu.outerWidth()}) //set submenu's left pos so it's out of view intially
					.data('timer', {}) //add timer data object to submenu object
				var $arrow=$('<div class="arrow" />').appendTo($submenu)
				var submenugutter=$arrow.outerWidth() // gap between $submenu and main wrapper to position arrow inside
				$arrow.css({left: -submenugutter-($submenu.outerWidth()-$submenu.innerWidth())/2})
				if ($submenu.outerHeight()-15 < ($anchor.outerHeight())) // if height of submenu is less than its corresponding icon anchor (most likely a tooltip)
					$submenu.css({top: 8})
				var $wrapper=$submenu.closest('div.subwrapper').css({width:$submenu.outerWidth()+ddiconmenu.wrapperoffset[0] + submenugutter + 40, height:$submenu.outerHeight()+ddiconmenu.wrapperoffset[1]}) //reference outermost wrapper of submenu and set its dimensions
				var $wrapperparent=$anchor.closest('div.subwrapper') //check if this anchor link is defined inside a submenu wrapper (nested menu)
				if ($wrapperparent.length>0){ //if so
					$wrapper.appendTo($wrapperparent) //move corresponding submenu wrapper to within its parent submenu wrapper
				}
				else{ //else if this submenu wrapper is topmost
					$wrapper.appendTo(document.body) //move it so it's a child of document.body
					$submenu.data('istopmenu', true) //indicate this is top level wrapper
				}
				$anchor.bind((setting.trigger=="click")? "click" : "mouseenter", function(e){ //when mouse clicks on or mouses over anchor
					clearTimeout($submenu.data('timer').hide)
					var offset=($submenu.data('istopmenu'))? $anchor.offset() : $anchor.position()
					$anchors.removeClass('selected')
					$anchor.addClass('selected')
					$wrapper.css({visibility:'visible', left:offset.left+$anchor.outerWidth()+ddiconmenu.wrapperoffset[0], top:offset.top, zIndex:++ddiconmenu.startzindex})
					$submenu.css({opacity:0}).stop().animate({left:submenugutter, opacity:1}, s.dur, s.easing) //animate submenu into view
					if (setting.trigger=="click" && !ddiconmenu.ismobile) //returning false in mobile browsers seem to lead to strange behavior
						return false
				})
				$anchor.mouseleave(function(){ //when mouse moves OUT anchor
					$submenu.data('timer').hide=setTimeout(function(){
						$submenu.stop().animate({left:-$submenu.outerWidth()-submenugutter, opacity:0}, s.dur, function(){$wrapper.css({visibility:'hidden'})}) //animate submenu out of view and hide wrapper DIV
						$anchor.removeClass('selected')
					}, s.hidedelay)
				})
				$anchor.click(function(e){
					if (relvalue!="[title]" || (setting.trigger=='mouseenter' && !ddiconmenu.ismobile)) //on ipad/iphone, disable anchor link (those with a drop down menu) when clicked on (triggered by mouseover event on desktop), so menu is given a chance to appear
						return false
				})
				$wrapper.mouseenter(function(){ //when mouse moves OVER submenu wrapper
						clearTimeout($submenu.data('timer').hide)
				})
				$wrapper.bind('mouseleave click', function(e){ //when mouse moves OUT or CLICKs on submenu wrapper
					$submenu.data('timer').hide=setTimeout(function(){
						$submenu.stop().animate({left:-$submenu.outerWidth()-submenugutter, opacity:0}, (e.type=="click")? 0 : s.dur, function(){$wrapper.css({visibility:'hidden'})}) //animate submenu out of view and hide wrapper DIV
						$anchor.removeClass('selected')
					}, s.hidedelay)
				})
				if (relvalue!="[title]"){
					ddiconmenu.submenuids.push(relvalue)
				}
				buildmenu($submenu.find('*[rel]')) //build next level sub menus
			})
		}
		buildmenu($anchors)
	},

	docinit:function(setting){
		jQuery(function($){ //on document.ready
			ddiconmenu.init(setting)
		})
	}

}



