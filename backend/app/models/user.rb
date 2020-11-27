class User < ApplicationRecord
  before_create :generate_activate_token
  
  has_secure_password
  has_secure_password :activate_token, validations: false
  has_secure_password :reset_password_token, validations: false

  has_many :gigs

  validates :name, presence: true, length: { minimum: 2 }
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { in: 8..16 }
  validates :role, presence: true, inclusion: { in: %w(musician spectator) }
  validates :biography, length: { maximum: 1000 }

  def activate!
    update!(activated: true)
  end

  def deserves_to_activate?
    !(activated && is_activate_token_expired?)
  end
  
  private

  def generate_activate_token
    activate_token = SecureRandom.urlsafe_base64
    activate_token_sent_at = Time.current
  end
  
  def is_activate_token_expired?
    activate_token_sent_at >= Time.current + 1.day
  end
end
