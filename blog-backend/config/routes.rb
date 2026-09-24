# config/routes.rb
Rails.application.routes.draw do
  # Standard CRUD routes for posts
  resources :posts, only: [:index, :show, :create, :destroy]
end