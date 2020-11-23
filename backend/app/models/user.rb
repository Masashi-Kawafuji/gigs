class User < ApplicationRecord
  has_secure_password

  has_many :gigs

  validates :name, presence: true, length: { minimum: 2 }
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { in: 8..16 }
  validates :role, presence: true, inclusion: { in: %w(musician spectator) }
  validates :biography, length: { maximum: 1000 }
end
