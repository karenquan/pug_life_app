# Pug Life

Pug Life is an online pug repository! Anyone who visits the site will be able to browse photos of pugs that other users have added. But, as a registered user, you will have the opportunity to add your own photos, and they will appear on your own personal profile page. You can even add other people's photos to your "Favorites" list. :)

![heart](app/assets/images/readme.jpg)

[Pug Life](https://agile-earth-33019.herokuapp.com/) | [User Stories](https://trello.com/b/kABEN5rc/pug-life)

## Technologies Used
* HTML
* CSS/Sass, [Normalize](https://github.com/JohnAlbin/normalize-scss)
* jQuery
* Ruby on Rails
* [Paperclip](https://github.com/thoughtbot/paperclip) gem for image uploads
	* Prerequisites:
		* [Amazon Web Services](https://aws.amazon.com/what-is-aws/) account for image storage in the cloud
		* [Heroku Toolbelt](https://toolbelt.heroku.com/) for web application creation and deployment to Heroku
		* [ImageMagick](http://www.imagemagick.org/script/index.php) for image resize
	* Configuration
		* Gems to be added to your Gemfile: 
			* paperclip
			* aws-sdk
			* [dotenv](https://github.com/bkeepers/dotenv) to load environment variables from .env into ENV in development 
* [Heroku](https://www.heroku.com/) for deployment ([instructions](https://devcenter.heroku.com/articles/getting-started-with-rails4))


## Get Started
* [Click here](http://pug-life.herokuapp.com/) to visit the Pug Life site
* [Create an account](https://agile-earth-33019.herokuapp.com/signup), or just browse through all images

##Next Steps
- Use Ajax for form submissions to limit the number of page refreshes and redirects
- Allow users to upload a profile image, and display it on their profile page
- Allow users to add tags to images
- Allow users to search by tag name
- Allow users to flag an image as not being a pug image
	- Allow admins to see flagged images
