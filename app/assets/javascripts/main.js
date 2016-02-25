var Images = (function(){

  function _eventHandlers() {
    imageHover();
    replaceFileUploadLabelName();

    $('.image-display').on('click', albumImageClickEvent);
    $('.image-info').on('click', imageClickEvent);
  }

  function editButtonClickEvent(e) {
    e.stopPropagation();

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
    $('.hover-image')
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
      $imageTitle = $('<h2 />', { text: $(this).find('h3').html() });
      $imageAlbum = $('<p />', { html: $(this).find('.image-album').html() });
      $imageDescription = $('<p />', { text: $(this).find('.image-description').html() });
      $image = $('<img />', { src: $(this).find('.image-url').html(), alt: $(this).find('h3').html() });
      $userPath = $('<p />', { 'class': 'image-user-path', html: $(this).find('.image-user-path').html() });

      $addFavoriteButton = $(this).find('.add-favorite-button');
      $removeFavoriteButton = $(this).find('.remove-favorite-button');
      if ($addFavoriteButton.length) {
        $favoriteButton = $('<span />', { 'class': 'add-favorite-button', html: $addFavoriteButton.html() });
      }
      if ($removeFavoriteButton.length) {
        $favoriteButton = $('<span />', { 'class': 'remove-favorite-button', html: $removeFavoriteButton.html() });
      }

      $modalContent.append($closeButton).append($imageTitle).append($imageDescription).append($imageAlbum).append($userPath).append($image).append($favoriteButton);
    $modalContainer.append($modalContent);
    $('body').append($modalContainer);

    $('.close').on('click', function(e) {
      e.stopPropagation();
      $('.modal').remove();
    });
  }

  function albumImageClickEvent() { //event for clicking an image not on home page
    $imageInfo = $(this).siblings('.image-info');
    $modalContainer = $('<div />', { 'class': 'modal' });
    $modalContent = $('<div />', { 'class': 'content' });
      $closeButton = $('<div />', { 'class': 'close' });
      $imageTitle = $('<h2 />', { text: $imageInfo.find('h3').html() });
      $imageAlbum = $('<p />', { html: $imageInfo.find('.image-album').html() });
      $imageDescription = $('<p />', { text: $imageInfo.find('.image-description').html() });
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

      $modalContent.append($closeButton).append($imageTitle).append($imageDescription).append($imageAlbum).append($userPath).append($image).append($favoriteButton);
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

  function replaceFileUploadLabelName() {
    $fileInput = $('#image_url');
    $label = $('label.image-upload');
    $fileInput.on('change', function(e) {
      console.log($(this).val());
      var fileName = $(this).val().split('\\').pop();
      if(fileName)
        $label.html(fileName);
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
