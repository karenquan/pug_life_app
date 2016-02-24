class RemoveProfileImageUrlFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :profile_image_url
    remove_column :images, :url
  end
end
