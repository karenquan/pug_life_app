var Main = (function(){

  function _eventHandlers() {
    imageHover();
    replaceFileUploadLabelName();
    profileTabs();

    $('.image-display').on('click', albumImageClickEvent);
    $('.image-info').on('click', imageClickEvent);
  }

  function profileTabs() {
    $('ul.user-sections').each(function(e) {
      var $active, $content, $links = $(this).find('a');
      console.log($(this).find('a'));
      $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
      $active.addClass('active');
      $content = $($active[0].hash);

      //hide non-active content
      $links.not($active).each(function(e) {
        $(this.hash).hide();
      });

      //bind click event
      $(this).on('click', 'a', function(e) {
        //make old tab inactive
        $active.removeClass('active');
        $content.hide();

        //update variables with new link & content
        $active = $(this);
        $content = $(this.hash);

        //make tab active
        $active.addClass('active');
        $content.show();

        e.preventDefault();
      });
    });
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
    $imageInfoContainer = $('<div />', { 'class': 'modal-info' });
      $favoriteButton = '';
      $closeButton = $('<div />', { 'class': 'close' });
      $imageTitle = $('<h2 />', { 'class': 'image-title', text: $(this).find('h3').html() });
      $imageAlbum = $('<p />', { html: $(this).find('.image-album').html() });
      $imageDescription = $('<p />', { 'class': 'image-description', text: $(this).find('.image-description').html() });
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

      $imageInfoContainer.append($imageTitle).append($imageDescription).append($imageAlbum).append($userPath).append($favoriteButton);
      $modalContent.append($closeButton).append($imageInfoContainer).append($image);
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
    $imageInfoContainer = $('<div />', { 'class': 'modal-info' });
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

    $imageInfoContainer.append($imageTitle).append($imageDescription).append($imageAlbum).append($userPath).append($favoriteButton);
    $modalContent.append($closeButton).append($imageInfoContainer).append($image);
    $modalContainer.append($modalContent);
    $('body').append($modalContainer);

    $('.close').on('click', function(e) {
      e.stopPropagation();
      $('.modal').remove();
    });
  }

  function adminDeleteClick() {
    $('.admin-delete-icon').on('click', function(e) {
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
  Main.init();
});
