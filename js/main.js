$(document).ready(function() {
  //Select elements
  const hamburger = $('.hamburger');
  const searchIcon = $('.search-icon');
  const searchForm = $('.search-form');
  const mainMenu = $('.main-menu');

  //Toggle form
  searchIcon.click(function() {
    $(this)
      .next()
      .fadeToggle(200);
    $(this).toggleClass('active');
    if (mainMenu.css('display', 'block')) {
      mainMenu.css('display', 'none');
      hamburger.removeClass('is-active');
    }
  });

  //Toggle menu
  hamburger.click(function() {
    $(this).toggleClass('is-active');
    mainMenu.slideToggle(300).css({
      display: 'flex',
      flexDirection: 'column'
    });
    if (searchIcon.hasClass('active')) {
      searchIcon.removeClass('active');
      searchForm.css('display', 'none');
    }
  });

  //Links background color
  linksColors();

  $(window).resize(function() {
    linksColors();
  });

  function linksColors() {
    $('[data-link]').each(function() {
      const color = $(this).data('link');
      $(this)
        .find('.link-color')
        .css('color', color);
      if ($(window).width() < 480) {
        $(this)
          .find('.link-bg')
          .css('background-color', color);
      } else {
        $(this)
          .find('.link-bg')
          .css('background-color', 'transparent');
      }
    });
  }
});
