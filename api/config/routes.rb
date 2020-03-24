Rails.application.routes.draw do
  namespace :api, {format: 'json'}do
    namespace :v1 do
      post 'login', to: 'users#create', as: :login
      resource :users, only: [:show]
      namespace :users do
        resources :tasks, only: [:index, :update, :create]
      end
    end
  end
end
