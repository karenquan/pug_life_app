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
      flash[:notice] = 'You have created a new book!'
      redirect_to image_path(@image)
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
      redirect_to image_path(@image)
    else
      render :edit
    end
  end

  def destroy
    @image = Image.find(image_params)
    #check if image belongs in album of current user before allowing delete

  end

  private
    def image_params
      params.require(:image).permit(:url, :title, :description,)
    end
end
