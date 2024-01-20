# /path/to/app/Dockerfile
FROM ruby:2.7.5-alpine

ENV BUNDLER_VERSION=2.0.2

RUN apk add --update --no-cache \
      binutils-gold \
      build-base \
      curl \
      file \
      g++ \
      gcc \
      git \
      less \
      libstdc++ \
      libffi-dev \
      libc-dev \
      linux-headers \
      libxml2-dev \
      libxslt-dev \
      libgcrypt-dev \
      make \
      netcat-openbsd \
      nodejs \
      openssl \
      pkgconfig \
      postgresql-dev \
      tzdata \
      yarn

# Установка Bundler
RUN gem install bundler -v $BUNDLER_VERSION

ENV BUNDLE_PATH /bundle
ENV BUNDLE_BIN /bundle/bin
ENV GEM_HOME /bundle
ENV PATH $GEM_HOME/bin:$BUNDLE_BIN:$PATH

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN bundle config build.nokogiri --use-system-libraries

RUN apk update && bundle check || bundle install

COPY package.json yarn.lock ./

RUN yarn install --check-files

COPY . ./

ENTRYPOINT ["./entrypoints/docker-entrypoint.sh"]