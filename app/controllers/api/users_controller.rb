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

  def update
    @user = current_user
    if @user.update_attributes(user_params)
      render json: @user.to_json
    else
      render json: @user.errors.fullmessages, status: 422
    end
  end

  def search
    username = params[:username]
    @users = User.where('username ~ ? and id != ?', username, current_user.id)

    render :searchedUsers
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :birthday, :password)
  end
end
