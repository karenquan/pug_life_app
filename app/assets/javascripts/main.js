var Images = (function(){

  function _eventHandlers() {
    $('#mainImages .image')
      .mouseenter(function(e){
          $(this).children().eq(1).removeClass('hide').addClass('show');
        })
      .mouseleave(function(e) {
        $(this).children().eq(1).removeClass('show').addClass('hide');
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
