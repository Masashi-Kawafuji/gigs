class JsonWebToken
  HMAC_SECRET = Rails.application.credentials.secret_key_base
  
  def self.encode(payload)
    JWT.encode(payload, HMAC_SECRET, 'HS256')
  end

  def self.decode(token)
    decoded_token = JWT.decode(token, HMAC_SECRET, true, { algorithm: 'HS256' }).first
    ActiveSupport::HashWithIndifferentAccess.new(decoded_token)
  rescue JWT::VerificationError, JWT::DecodeError
    nil
  end
end