class AlbumsController < ApplicationController
  before_action :authorize_modify_content, only: [:edit, :update, :destroy]

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
    @album = Album.find(params[:id])
    @image = Image.new
    @images = @album.images
  end

  def edit
    @album = Album.find(params[:id])
  end

  def update
    @album = Album.find(params[:id])
    if @album.update_attributes(album_params)
      redirect_to album_path(:id => @album.id)
    else
      render :edit
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy
    redirect_to user_path(@album.user_id)
  end

  private

  def album_params
    params.require(:album).permit(:title, :description)
  end

  def authorize_modify_content
    @album = Album.find(params[:id])
    if current_user != @album.user
      redirect_to root_path
    end
  end
end
