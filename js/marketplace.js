
;(function () {
    'use strict';

    var wrapper = $('.wrapper')
      , panel   = $('.wrapper-panel')
      , body    = $('body')
    
  $('.app-flexbox-item').on('click', function (e) {
    var data = $(this).data()
    e.preventDefault();
    console.log(data)
    function content () {
      $('.wrapper-panel-hero', panel).css({
        backgroundImage: 'url("' + data.img + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
      
      $('.wrapper-panel-body', panel).html('<p>'+ data.title +'</p>')
    }
    
    if (! wrapper.hasClass('active')) {
      panel.addClass('active')  
      wrapper.addClass('active')
      body.addClass('active')   
      content()
    } else {
      content()
    }
  })

  $('.wrapper-panel a.close').on('click', function (e) {
    e.preventDefault()

    panel.removeClass('active')
    wrapper.removeClass('active')
    container.removeClass('active')
    
  })

}());