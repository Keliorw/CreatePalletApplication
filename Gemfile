source "https://rubygems.org"                                      #Указываем откуда пакетному мнеджеру RUBY брать пакеты и расширения

ruby "2.7.5"                                                       #Используемая версия руби
gem "rails", "~> 7.0.4", ">= 7.0.4.2"                              #Каркас приложения с ORM
gem "sprockets-rails"                                              #Для управления и компиляци картинок, js, css и других статических ресорсов
gem "pg", "~> 1.1"                                                 #Для работы с PostgreSQL
gem "puma", "~> 6.0.2"                                             #Веб-сервер для ruby приложения
gem "turbo-rails"                                                  #Для улучшения производительности веб-плиложения
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]    #Для часовых поясов
gem "bootsnap", require: false                                     #Ускорялочка для ruby
gem "sassc-rails"                                                  #Препроцессоры для css
gem 'slim-rails'                                                   #Просто так удобнее и привычнее писать html
gem 'devise', '~> 4.9'                                             #Для аунтефикацию пользователей

group :development do
  gem "pry"                                                        #Для человека понятной консоли
  gem "debug", platforms: %i[ mri mingw x64_mingw ]                #Для вывода ошибок
  gem "web-console"                                                #Добавляет консоль в браузер
  gem "rspec"                                                      #Для тестов приложения
end