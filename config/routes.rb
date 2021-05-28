Rails
  .application
  .routes
  .draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: { format: :json } do
      resource :user, only: %i[create update]
      resource :session, only: %i[create destroy show]
      resources :servers
      post '/servers/member', to: 'servers#add_member', as: 'add_server_member'
      post '/servers/join/', to: 'servers#join_server', as: 'join_server'
      delete '/servers/member',
             to: 'servers#remove_member',
             as: 'remove_server_member'
      delete '/servers/leave/:id',
             to: 'servers#leave_server',
             as: 'leave_server'
      resources :channels
      get '/dmchannels', to: 'channels#dm_channels', as: 'dm_channels'
      get '/serverchannels/:id',
          to: 'channels#server_channels',
          as: 'server_channels'
      resources :messages
      get '/channelmsgs/:id',
          to: 'messages#channel_messages',
          as: 'channel_messages'
      post '/channelmsg', to: 'messages#create', as: 'channel_message'
      get '/search/:username', to: 'users#search', as: 'user_search'
    end

    mount ActionCable.server => '/cable'
    root 'staticpages#root'
  end
