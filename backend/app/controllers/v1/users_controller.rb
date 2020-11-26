module V1
  class UsersController < ApplicationController
    skip_before_action :rquire_login, only: :create
    
    def create
      user = User.new(user_params)
      if user.save
        render json: { message: 'You\'ve resistared successfully.' }, status: :created
      else
        render json: { errors: user.errors }, status: :unprocessable_entity
      end
    end

    def activate
      user = User.find_by(email: params[:email])
      if user&.authenticate_activate_token(params[:activate_token]) && user.deserves_to_activate?
        user.activate!
        set_jwt_to_cookie(user)
        render json: { user: user }
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
  end
end
  