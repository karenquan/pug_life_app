var Images = (function(){

  function _eventHandlers() {
    $('#mainImages .image')
      .mouseenter(function(e){
          $(this).find('.image-info').removeClass('hide');
        })
      .mouseleave(function(e) {
        $(this).find('.image-info').addClass('hide');
      });


      $('.image').on('click', function(e) {
        $(this).find('.modal').removeClass('hide');
        $(this).find('.close').on('click', function() {
          console.log($(this).closest('.modal'));
          $($(this).closest('.modal')).addClass('hide');
        });
      });
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
