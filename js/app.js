$(document).ready(() => {

  $('.menu-link').click((e) => {
    e.preventDefault();

    const link = $(e.currentTarget).attr('href');
    $('body,html').stop(true,true).animate({        
      scrollTop: $(link).offset().top
    },1000);
  });

});