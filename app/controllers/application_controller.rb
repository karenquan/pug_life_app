class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user


  private

    def current_user
      @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    end

    def is_admin(user)
      user.is_admin
    end

    # def is_admin?
    #   current_user.present? && current_user.is_admin
    # end
end
