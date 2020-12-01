class User < ApplicationRecord
  before_create :set_activate_token
  
  has_secure_password
  has_secure_password :activate_token, validations: false
  has_secure_password :reset_password_token, validations: false

  has_many :gigs

  validates :name, presence: true, length: { minimum: 2 }
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { in: 8..16 }
  validates :role, presence: true, inclusion: { in: %w(musician spectator) }
  validates :biography, length: { maximum: 1000 }

  def activate
    update_attribute(:activated, true)
  end
  
  def activate_token_expired?
    activate_token_sent_at + 1.day <= Time.current
  end

  private

  def set_activate_token
    self.activate_token = SecureRandom.urlsafe_base64
    self.activate_token_sent_at = Time.current
  end
end
