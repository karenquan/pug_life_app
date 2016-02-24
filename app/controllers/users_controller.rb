class UsersController < ApplicationController
  before_action :authorize_modify_content, only: [:edit]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def show
    @user = User.find(params[:id])
    @albums = @user.albums
  end

  def update
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to root_path
  end

  def add_favorite
    @image = Image.find(params[:image_id])
    @user = current_user

    @user.favorites << @image
    redirect_to root_path
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :username, :password, :password_confirmation)
    end

    def authorize_modify_content
      if (current_user != User.find(params[:id])) && !current_user.is_admin
        redirect_to root_path
      end
    end
end
