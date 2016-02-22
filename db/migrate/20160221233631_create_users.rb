class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :password_digest
      t.string :profile_image_url
      t.boolean :is_admin

      t.timestamps null: false
    end
  end
end