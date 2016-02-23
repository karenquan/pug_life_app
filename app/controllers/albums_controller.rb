class AlbumsController < ApplicationController
  #before_action :authorize, :except [:index, :show]

  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
      @albums = @user.albums
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
      redirect_to user_path(params[:user_id])
    else
      render :new
    end
  end

  def show
    @user = User.find(params[:user_id])
    @album = Album.find(params[:id])
    @images = @album.images
  end

  def edit
    # add user condition check
    @user = User.find(params[:user_id])
    @album = Album.find(params[:id])
  end

  def update
    #add user condition check
    @user = User.find(params[:user_id])
    @album = Album.find(params[:id])
    if @album.update_attributes(album_params)
      redirect_to user_album_path(:user_id => @user.id, :album_id => @album.id)
    else
      render :edit
    end
  end

  def destroy
    @album = Album.find(params[:id])
    # add user condition check
    @album.destroy
    redirect_to user_path(params[:user_id])
  end

  private

  def album_params
    params.require(:album).permit(:title, :description)
  end
end
