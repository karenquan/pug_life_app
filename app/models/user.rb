 class User < ActiveRecord::Base
  has_secure_password
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true, uniqueness: true, length: { in: 2..20 }
  validates :password, length: { minimum: 2 }
  has_attached_file :profile_image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\Z/

  has_many :albums, dependent: :destroy
  has_and_belongs_to_many :favorites, class_name: "Image"
end
