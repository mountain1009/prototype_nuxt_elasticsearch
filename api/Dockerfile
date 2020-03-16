FROM ruby:2.6.3-alpine

ENV HOME="/prototype_task_nuxt/api"
# 必要なライブラリインストール
ARG RUNTIME_PACKAGES="build-base libstdc++ tzdata vim git gnupg openssh-client vim mysql-client mysql-dev"

RUN apk add --update --no-cache $RUNTIME_PACKAGES

WORKDIR $HOME

COPY Gemfile $HOME/Gemfile
COPY Gemfile.lock $HOME/Gemfile.lock

RUN bundle install
