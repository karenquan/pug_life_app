class Image < ActiveRecord::Base
  belongs_to :album
  has_and_belongs_to_many :favorited_by, class_name: "User"

  validates :title, presence: true
  validates :description, presence: true

  has_attached_file :url, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :url, content_type: /\Aimage\/.*\Z/
end
