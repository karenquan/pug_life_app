class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private

    helper_method :current_user

    def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def authorize
      #redirect_to root_path, if current_user.id != params[:id]
      if session[:user_id] != params[:id]
        redirect_to root_path
      end
    end
end
