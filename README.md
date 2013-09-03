# DD Icon Menu #

*Description:*  DD Icon Menu creates an icon based vertical menu that sits fixed on the left edge of the browser window and expands to show sub menus onMouseover.  Infinite levels of sub menus can be associated with each icon, with each sub menu simply defined as a hidden DIV on the page.

## Directions ##

*Step 1:* This script uses the following external files:

+ jQuery 1.5 or above (served via Google CDN)
+ iconmenu.js
+ iconmenu.css

*Step 2:* Add the below code to the HEAD section of your page:

	<link rel="stylesheet" type="text/css" href="iconmenu.css" />
	<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	
	<script src="iconmenu.js">
	
	/***********************************************
	* DD Icon Menu- (c) Dynamic Drive DHTML code library (www.dynamicdrive.com)
	* This notice MUST stay intact for legal use
	* Visit Dynamic Drive at http://www.dynamicdrive.com/ for this script and 100s more
	***********************************************/
	
	</script>
	
	<script>
	
	ddiconmenu.docinit({ // initialize an Icon Menu
		menuid:'myiconmenu', //main menu ID
		easing:"easeInOutCirc",
		dur:500 //<--no comma after last setting
	})
	
	
	</script>


*Step 3:* Then, add the below sample markup to your page:

	<!-- Main Icon Menu -->
	
	<ul id="myiconmenu" class="iconmenu">
	  <li><a class="icon-list-ul" href="#" rel="csslibrary"></a></li>
	  <li><a class="icon-search" href="#" rel="ddcontentarea"></a></li>
	  <li><a class="icon-gears" href="#" rel="webtools" title="Web Tools"></a></li>
	  <li><a class="icon-rss" href="#" rel="[title]" title="RSS"></a></li>
	  <li><a class="icon-twitter" href="#" rel="[title]" title="Twitter"></a></li>
	</ul>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	<!- CSS Library sub menu -->
	
	<div id="csslibrary" class="iconsubmenu dropdownmenu">
		<ul class="ulmenu">
			<li><a href="http://www.dynamicdrive.com/style/csslibrary/category/C8/" rel="webtools">Web Tools</a></li>
			<li><a href="http://www.dynamicdrive.com/style/csslibrary/category/C1/">Horizontal CSS Menus</a></li>
			<li><a href="http://www.dynamicdrive.com/style/csslibrary/category/C2/">Vertical CSS Menus</a></li>
			<li><a href="http://www.dynamicdrive.com/style/csslibrary/category/C4/">Image CSS</a></li>
			<li><a href="http://www.dynamicdrive.com/style/csslibrary/category/C6/">Form CSS</a></li>
			<li><a href="http://www.dynamicdrive.com/style/csslibrary/category/C5/">DIVs and containers</a></li>
			<li><a href="http://www.dynamicdrive.com/style/csslibrary/category/C7/">Links & Buttons</a></li>
			<li><a href="http://www.dynamicdrive.com/style/csslibrary/category/C17/">CSS3 demos</a></li>
		</ul>
	</div>
	
	
	
	<!- General Content sub menu -->
	
	<div id="ddcontentarea" class="iconsubmenu mixedcontent">
	
		<p style="margin:5px 0 10px 0"><b>Visit the following main content areas of Dynamic Drive:</b></p>
	
		<div class="column">
		<ul>
		<li><a href="http://www.dynamicdrive.com">DHTML Scripts</a></li>
		<li><a href="http://www.dynamicdrive.com/new.htm">What's New</a></li>
		<li><a href="http://www.dynamicdrive.com/revised.htm">Revised</a></li>
		</ul>
		</div>
		<div class="column">
		<ul>
		<li><a href="http://www.dynamicdrive.com/style/" rel="csslibrary">CSS Library</a></li>
		<li><a href="http://www.dynamicdrive.com/forums/">DHTML Forums</a></li>
		<li><a href="http://tools.dynamicdrive.com" rel="webtools">Web Tools</a></li>
		</ul>
		</div>
	
	</div>
	
	
	
	
	<!- Web Tools sub menu -->
	
	<div id="webtools" class="iconsubmenu dropdownmenu">
		<ul class="ulmenu">
			<li><a href="http://tools.dynamicdrive.com/imageoptimizer/">Image Optimizer</a></li>
			<li><a href="http://tools.dynamicdrive.com/favicon/">FavIcon Generator</a></li>
			<li><a href="http://tools.dynamicdrive.com/animatedgif/">Animated Gif Generator</a></li>
			<li><a href="http://www.dynamicdrive.com/emailriddler/">Email Riddler</a></li>
			<li><a href="http://tools.dynamicdrive.com/password/">.htaccess Password Generator</a></li>
			<li><a href="http://tools.dynamicdrive.com/gradient/">Gradient Image Maker</a></li>
			<li><a href="http://tools.dynamicdrive.com/userban/">.htaccess Banning Generator</a></li>
			<li><a href="http://tools.dynamicdrive.com/button/">Button Maker</a></li>
			<li><a href="http://tools.dynamicdrive.com/ribbon/">Ribbon Rules Generator</a></li>
		</ul>
	</div>

## DD Icon Menu set up ##

See script project page for additional details on setup and documentation: <http://www.dynamicdrive.com/dynamicindex1/ddiconmenu.htm>
