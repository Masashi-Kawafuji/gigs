module V1
  class AuthenticationController < ApplicationController
    skip_before_action :require_login
    
    def login
      @user = User.find_by(email: params[:email])
      if @user&.authenticate(params[:password]) && @user.activated
        set_jwt_to_cookie
        render json: { user: UserSerializer.new(@user).serializable_hash[:data][:attributes] }
      else
        head :unprocessable_entity
      end
    end
    
    def logout
      cookies.delete(:jwt)
      head :no_content
    end
    
    def auto_login
      if current_user.present?
        render json: { user: UserSerializer.new(current_user).serializable_hash[:data][:attributes] }
      else
        head :unauthorized
      end
    end

    private

    def set_jwt_to_cookie
      payload = { user_id: @user.id }
      jwt = JsonWebToken.encode(payload)
      cookies.encrypted[:jwt] = { value: jwt, httponly: true }
    end  
  end
end
  