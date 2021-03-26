class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.avatar =
      'https://cdn.dribbble.com/users/745861/screenshots/3148795/happy_moogle.png?compress=1&resize=400x300'
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :birthday, :password)
  end
end
