class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render json: ["USER CREATED"]
    else
      render json: @user.errors.full_messages,
      status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :session_token, :password_digest)
  end
end
