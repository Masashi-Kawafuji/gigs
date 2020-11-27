Rails.application.routes.draw do
  namespace :v1 do
    post '/login', to: 'authentication#login'
    delete '/logout', to: 'authentication#logout'
    get '/auto_login', to: 'authentication#auto_login'

    resources :users, only: [:create, :update, :destroy]
    get 'users/activate', to: 'users#activate'
  end
end
