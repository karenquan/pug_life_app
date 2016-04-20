# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Image.destroy_all
# Album.destroy_all
# User.destroy_all

User.create({first_name: 'Karen', last_name: 'Quan', username: 'karenquan', password: 'herro', is_admin: true})
