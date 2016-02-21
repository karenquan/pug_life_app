class Image < ActiveRecord::Base
  belongs_to :album
  has_and_belongs_to_many :favorited_by, class_name: "User"
end
