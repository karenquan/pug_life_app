class CreateImagesUsers < ActiveRecord::Migration
  def change
    create_table :images_users do |t|
      t.references :image, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
    end
  end
end
