class Api::V1::UsersController < ApplicationController
  before_action :authenticate!, only: [:show]

  def create
    if (user = User.authenticate(params[:email], params[:password]))
      tokens = Jwt::TokenProvider.refresh_tokens user

      render json: tokens
    else
      unauthorized
    end
  end

  def show
    render json: @current_user
  end
end
