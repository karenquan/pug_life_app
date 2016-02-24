# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160224175516) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "albums", ["user_id"], name: "index_albums_on_user_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "tags"
    t.boolean  "flag"
    t.integer  "album_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "url_file_name"
    t.string   "url_content_type"
    t.integer  "url_file_size"
    t.datetime "url_updated_at"
  end

  add_index "images", ["album_id"], name: "index_images_on_album_id", using: :btree

  create_table "images_users", force: :cascade do |t|
    t.integer "image_id"
    t.integer "user_id"
  end

  add_index "images_users", ["image_id"], name: "index_images_users_on_image_id", using: :btree
  add_index "images_users", ["user_id"], name: "index_images_users_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "username"
    t.string   "password_digest"
    t.boolean  "is_admin"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "profile_image_file_name"
    t.string   "profile_image_content_type"
    t.integer  "profile_image_file_size"
    t.datetime "profile_image_updated_at"
  end

  add_foreign_key "albums", "users"
  add_foreign_key "images", "albums"
  add_foreign_key "images_users", "images"
  add_foreign_key "images_users", "users"
end
