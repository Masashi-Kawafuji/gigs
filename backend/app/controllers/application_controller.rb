class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :require_login

  private

  def current_user
    token = cookies.encrypted[:jwt]
    decoded_token = JsonWebToken.decode(token)
    @current_user ||= User.find_by(id: decoded_token[:user_id]) unless decoded_token.nil?
  end

  def require_login
    head :unauthorized if current_user.nil?
  end
end
