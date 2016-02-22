class User < ActiveRecord::Base
  has_secure_password
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 2 }

  has_many :albums
  has_and_belongs_to_many :favorites, class_name: "Image"
end
