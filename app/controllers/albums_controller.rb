class AlbumsController < ApplicationController
  def index
    if params[:user_id]
      @album_owner = User.find(params[:user_id])
      @albums = @album_owner.albums
    else
      @albums = Album.all
    end

  end

  def new
    @user = User.find(params[:user_id])
    @album = Album.new
  end

  def create
    @user = User.find(params[:user_id])
    @album = @user.albums.build album_params

    if @album.save
      flash[:notice] = 'You have created a new album!'
      redirect_to user_albums_path
    else
      render :new
    end
  end

  def show
    @album = Album.find(params[:id])
    @images = @album.images
  end

  def edit
    @album = Album.find(params[:id])
  end

  def update
    @album = Album.find(params[:id])

    if @album.update_attributes(album_params)
      redirect_to user_albums_path
    else
      render :edit
    end
  end

  def destroy
    @album = Album.find(params[:id])
    # CHECK ALBUM BELONGS TO CURRENT USER BEFORE ALLOWING DELETE
    @album.destroy
    redirect_to user_albums_path
  end

  private

  def album_params
    params.require(:album).permit(:title, :description)
  end
end
