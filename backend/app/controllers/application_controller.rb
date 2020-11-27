class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :require_login

  private

  def set_jwt_to_cookie(user)
    jwt = JsonWebToken.encode(payload)
    cookies.encrypted[:jwt] = { value: jwt, httponly: true }
  end

  def current_user
    token = cookies.encrypted[:jwt]
    decoded_token = JsonWebToken.decode(token)
    @current_user ||= User.find_by(id: decoded_token[:user_id]) unless decoded_token.nil?
  end
  
  def require_login
    render json: { message: 'Unauthorized.' }, status: :unauthorized if current_user.nil?
  end
end
