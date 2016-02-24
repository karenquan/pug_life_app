class ImagesController < ApplicationController
  before_action :authorize_modify_content, only: [:edit, :update, :destroy]

  def index

    if params[:album_id]
      @album = Album.find(params[:album_id])
      @images = @album.images
    else
      @images = Image.all
      @favorite = false
      if current_user
        @favorites = current_user.favorites
      end
    end
  end

  def new
    @album = Album.find(params[:album_id])
    @image = Image.new
    @user = User.find(@album.user_id)
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
  end

  def edit
    @image = Image.find(params[:id])
  end

  def update
    @image = Image.find(params[:id])

    if @image.update_attributes(image_params)
      redirect_to album_path(@image.album)
    else
      render :edit
    end
  end

  def destroy
    @image = Image.find(params[:id])
    @image.url = nil
    @image.destroy

    redirect_to album_path(@image.album)
  end

  def admin_destroy
    @image = Image.find(params[:id])
    @image.url = nil
    @image.destroy

    redirect_to root_path
  end

  private
    def image_params
      params.require(:image).permit(:url, :title, :description,)
    end

    def authorize_modify_content
      @image = Image.find(params[:id])
      if current_user != @image.album.user
        redirect_to root_path
      end
    end
end
