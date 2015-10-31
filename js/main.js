
$(document).ready(function() {

	var menu 				 = $('.masthead__menu'),
			intro 				 = $('.main-intro'),
			screenHeight = $(window).height();

	intro.css('height', screenHeight + "px")

	console.log(screenHeight)

	menu.on('click', function() {

		$.ajax({
		  url: 'http://nolrm.github.io/menu',
		  success:function(data){
		  	var response = $(data),
						result = response.filter('.menu').html();
		    
		    console.log(result);

		    $('#main').html(result).fadeIn();
		    // console.log(data);
		  }
		});

	});

});

window.sr = new scrollReveal();