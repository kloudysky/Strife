Rails
  .application
  .routes
  .draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: { format: :json } do
      resource :user, only: [:create]
      resource :session, only: %i[create destroy show]
      resources :servers
      post '/servers/member', to: 'servers#add_member', as: 'add_server_member'
      delete '/servers/member',
             to: 'servers#remove_member',
             as: 'remove_server_member'
      resources :channels
      get '/dmchannels', to: 'channels#dm_channels', as: 'dm_channels'
      get '/serverchannels/:id',
          to: 'channels#server_channels',
          as: 'server_channels'
      resources :messages
    end

    root 'staticpages#root'
  end
