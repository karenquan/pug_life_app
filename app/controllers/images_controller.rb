class ImagesController < ApplicationController
  before_action :authorize_modify_content, only: [:edit]

  def index
    if params[:album_id]
      @album = Album.find(params[:album_id])
      @images = @album.images
    else
      @images = Image.all
    end
  end

  def new
    @album = Album.find(params[:album_id])
    @image = Image.new
  end

  def create
    @album = Album.find(params[:album_id])
    @user = User.find(@album.user_id)
    @image = @album.images.build image_params

    if @image.save
      redirect_to album_path(:id => @album.id)
    else
      render :new
    end
  end

  def show
    @image = Image.find(params[:id])
    @album = Album.find(@image.album_id)
    @user = User.find(@album.user_id)
  end

  def edit
    # add user condition check
    @image = Image.find(params[:id])
    @album = Album.find(@image.album_id)
    @user = User.find(@album.user_id)
  end

  def update
    # add user condition check
    @image = Image.find(params[:id])
    @album = Album.find(@image.album_id)
    @user = User.find(@album.user_id)

    if @image.update_attributes(image_params)
      redirect_to album_path(:id => @album.id)
    else
      render :edit
    end
  end

  def destroy
    # add user condition check
    @image = Image.find(params[:id])
    @album = Album.find(@image.album_id)
    @user = User.find(@album.user_id)
    @image.destroy

    #add custom redirect if deleting from index page
    redirect_to album_path(:id => @album.id)
  end

  private
    def image_params
      params.require(:image).permit(:url, :title, :description,)
    end

    def authorize_modify_content
      @image = Image.find(params[:id])
      @album = Album.find(@image.album_id)
      if current_user != User.find(@album.user_id)
        redirect_to root_path
      end
    end
end
