source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.5"
gem "rails", "~> 7.0.4", ">= 7.0.4.2"
gem "sprockets-rails"
gem "pg", "~> 1.1"
gem "puma", "~> 6.0.2"
gem "turbo-rails"
gem "jbuilder"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false                                     #Ускорялочка для ruby
gem "sassc-rails"                                                  #Препроцессоры для css
gem 'slim-rails'                                                   #Просто так удобнее и привычнее писать html


group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem "pry" #Для человека понятной консоли
  gem "web-console"
  gem "rspec"
end