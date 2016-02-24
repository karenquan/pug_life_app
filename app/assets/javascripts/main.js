var Images = (function(){

  function _eventHandlers() {
    // adminDeleteClick();
    imageHover();

    $('.image-display').on('click', albumImageClickEvent);
    $('.image-info').on('click', imageClickEvent);
    // $('.add-button').on('click', addButtonClickEvent);
    // $('.edit-button').on('click', editButtonClickEvent);
  }

  function editButtonClickEvent(e) {
    e.stopPropagation();
    console.log('click');
    // $imageId = $(this).data('image-id');

    $('.edit.modal').removeClass('hide');

    $('.close').on('click', function(e) {
      $(this).closest('.modal').addClass('hide');
    });
  }

  function addButtonClickEvent() {
    $('.add.modal').removeClass('hide');

    $('.close').on('click', function(e) {
      $(this).closest('.modal').addClass('hide');
    });
  }

  function imageHover() {
    $('#mainImages .image')
      .mouseenter(function(e){
          $(this).find('.image-info').removeClass('hide');
        })
      .mouseleave(function(e) {
        $(this).find('.image-info').addClass('hide');
      }
    );
  }

  function imageClickEvent() {
    //build dynamic image modal
    $modalContainer = $('<div />', { 'class': 'modal' });
    $modalContent = $('<div />', { 'class': 'content' });
      $favoriteButton = '';
      $closeButton = $('<div />', { 'class': 'close' });
      $imageTitle = $('<h3 />', { text: $(this).find('h3').html() });
      $imageAlbum = $('<p />', { html: $(this).find('.image-album').html() });
      $imageDescription = $('<p />', { text: $(this).find('.image-description').html() });
      $imageDate = $('<p />', { text: $(this).find('.image-date').html() });
      $image = $('<img />', { src: $(this).find('.image-url').html(), alt: $(this).find('h3').html() });
      $userPath = $('<p />', { html: $(this).find('.image-user-path').html() });

      $addFavoriteButton = $(this).find('.add-favorite-button');
      $removeFavoriteButton = $(this).find('.remove-favorite-button');
      if ($addFavoriteButton.length) {
        $favoriteButton = $('<span />', { 'class': 'add-favorite-button', html: $addFavoriteButton.html() });
      }
      if ($removeFavoriteButton.length) {
        $favoriteButton = $('<span />', { 'class': 'remove-favorite-button', html: $removeFavoriteButton.html() });
      }

      $modalContent.append($closeButton).append($imageTitle).append($imageAlbum).append($userPath).append($image).append($imageDescription).append($favoriteButton);
    $modalContainer.append($modalContent);
    $('body').append($modalContainer);

    $('.close').on('click', function(e) {
      e.stopPropagation();
      $('.modal').remove();
    });
  }

  function albumImageClickEvent() {
    //build dynamic image modal
    $imageInfo = $(this).siblings('.image-info');
    $modalContainer = $('<div />', { 'class': 'modal' });
    $modalContent = $('<div />', { 'class': 'content' });
      $closeButton = $('<div />', { 'class': 'close' });
      $imageTitle = $('<h3 />', { text: $imageInfo.find('h3').html() });
      $imageDescription = $('<p />', { text: $imageInfo.find('.image-description').html() });
      $imageDate = $('<p />', { text: $imageInfo.find('.image-date').html() });
      $image = $('<img />', { src: $imageInfo.find('.image-url').html(), alt: $(this).find('h3').html() });
      $userPath = $('<p />', { html: $imageInfo.find('.image-user-path').html() });

      $addFavoriteButton = $imageInfo.find('.add-favorite-button');
      $removeFavoriteButton = $imageInfo.find('.remove-favorite-button');
      if ($addFavoriteButton.length) {
        $favoriteButton = $('<span />', { 'class': 'add-favorite-button', html: $addFavoriteButton.html() });
      }
      if ($removeFavoriteButton.length) {
        $favoriteButton = $('<span />', { 'class': 'remove-favorite-button', html: $removeFavoriteButton.html() });
      }

      $modalContent.append($closeButton).append($imageTitle).append($userPath).append($image).append($imageDescription).append($favoriteButton);
    $modalContainer.append($modalContent);
    $('body').append($modalContainer);

    $('.close').on('click', function(e) {
      e.stopPropagation();
      $('.modal').remove();
    });
  }

  function adminDeleteClick() {
    $('.admin-delete-icon').on('click', function(e) {
      console.log('hi');
      e.stopPropagation();
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
