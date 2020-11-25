Rails.application.routes.draw do
  namespace :v1 do
    get '/login', to: 'authentication#login'
    get '/logout', to: 'authentication#logout'
    get '/auto_login', to: 'authentication#auto_login'

    resources :users, only: [:create, :update, :destroy]
  end
end
