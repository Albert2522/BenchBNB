class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def already_logged_in?
    return unless current_user
    render :json ["ALREADY LOGGED IN"]
  end

  def current_user
    return nil unless session[:session_token]
    user = User.find_by_session_token(session[:session_token])
    user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout
    session[:session_token] = nil
  end
end
