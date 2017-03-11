class Api::SessionsController < ApplicationController
  # before_action :already_logged_in?

  def create
    @user = User.find_by_credentials(session_params[:username], session_params[:password])
    if @user
      login(@user)
      render json: ["WHOHOO"]
    else
      render(
        json: ["Invalid username/password combination"],
        status: 401)
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: ["User destroyed"]
    else
      render(
        json: ["Noboby signed in"],
        status: 404
      )
    end

  end

  def session_params
    params.require(:user).permit(:username, :password, :session_token)
  end
end
