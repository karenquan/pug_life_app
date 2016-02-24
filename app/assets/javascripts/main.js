var Images = (function(){

  function _eventHandlers() {
    $('#mainImages .image')
      .mouseenter(function(e){
          $(this).find('.image-info').removeClass('hide');
        })
      .mouseleave(function(e) {
        $(this).find('.image-info').addClass('hide');
      });


      $('.image').on('click', imageClickEvent);

      function imageClickEvent() {
        //build dynamic image modal
        $('.image').unbind('click');

        $modalContainer = $('<div />', { 'class': 'modal' });
        $modalContent = $('<div />', { 'class': 'content' });
          $closeButton = $('<div />', { 'class': 'close' });
          $imageTitle = $('<h3 />', { text: $(this).find('h3').html() });
          $imageDescription = $('<p />', { text: $(this).find('.image-description').html() });
          $imageDate = $('<p />', { text: $(this).find('.image-date').html() });
          $image = $('<img />', { src: $(this).find('.image-url').html(), alt: $(this).find('h3').html() });
          $userPath = $('<p />', { html: $(this).find('.image-user-path').html() });
          $modalContent.append($closeButton).append($imageTitle).append($userPath).append($image).append($imageDescription);
        $modalContainer.append($modalContent);
        $('body').append($modalContainer);

        $('.close').on('click', function() {
          console.log($($(this).closest('.modal')));
          $('.modal').remove();
          $('.image').bind('click', imageClickEvent);
        });
      }
  }

  function _init() {
    _eventHandlers();
  }

  return {
    init: _init
  }

})();

$(document).ready(function(){
  Images.init();
});
