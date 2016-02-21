class User < ActiveRecord::Base
  has_many :albums
  has_and_belongs_to_many :favorites, class_name: "Image"
end
