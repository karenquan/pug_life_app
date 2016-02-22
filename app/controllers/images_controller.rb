class ImagesController < ApplicationController
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
    @image = @album.images.build image_params

    if @image.save
      redirect_to user_album_path(params[:album_id])
    else
      render :new
    end
  end

  def show
    @image = Image.find(params[:id])
  end

  def edit
    # add user condition check
    @image = Image.find(params[:id])
  end

  def update
    # add user condition check
    @image = Image.find(params[:id])

    if @image.update_attributes(image_params)
      redirect_to user_album_path(params[:album_id])
    else
      render :edit
    end
  end

  def destroy
    # add user condition check
    @image = Image.find(image_params)
    @image.destroy
    redirect_to user_album_path(params[:album_id])
  end

  private
    def image_params
      params.require(:image).permit(:url, :title, :description,)
    end
end
