class Album < ActiveRecord::Base
  belongs_to :user
  has_many :images, dependent: :destroy

  validates :title, presence: true
  validates :description, presence: true
end
