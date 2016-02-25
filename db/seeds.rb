# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Image.destroy_all
Album.destroy_all
User.destroy_all

karen = User.create(
  first_name: 'Karen',
  last_name: 'Quan',
  username: 'karen',
  password: 'hi',
  password_confirmation: 'hi',
  is_admin: true
)

chester_album = karen.albums.create(
  title: 'Chester',
  description: 'Chester the Pug'
)

chester_album.images.create(
  url_file_name: 'http://s3.amazonaws.com/pugrailsapp/images/urls/000/000/002/original/14.jpg?1456420831',
  title: 'Chester',
  description: 'Chester!'
)
