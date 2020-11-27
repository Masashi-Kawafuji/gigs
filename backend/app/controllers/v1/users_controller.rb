module V1
  class UsersController < ApplicationController
    skip_before_action :require_login, only: :create
    
    def create
      @user = User.new(user_params)
      if @user.save
        send_activate_account_email
        head :created
      else
        render json: { errors: @user.errors }, status: :unprocessable_entity
      end
    end

    def activate
      user = User.find_by(email: params[:email])
      if user&.authenticate_activate_token(params[:activate_token]) && user.deserves_to_activate?
        user.activate!
        head :ok
      else
        head :not_acceptable
      end
    end

    def update
      
    end
    
    def destroy
      
    end

    private

    def user_params
      params.require(:user).permit(
        :email,
        :password,
        :password_confirmation,
        :name
      )
    end

    def send_activate_account_email
      UserMailer.with(user: @user).activate_account_email.deliver_later
    end
  end
end
  