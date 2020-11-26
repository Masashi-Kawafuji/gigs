module V1
  class AuthenticationController < ApplicationController
    skip_before_action :require_login
    
    def login
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        set_jwt_to_cookie(user)
        render json: { user: user }
      end
    end
    
    def logout
      cookies.encrypted.delete(:user_id)
    end
    
    def auto_login
      if current_user.present?
        render json: { user: user }
      else
        head :unauthorized
      end
    end
  end
end
  