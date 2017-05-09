Rails.application.routes.draw do
  resources :users, only: %i(index edit) do
    resources :actions, only: %i(index)
    resources :lists do
      resources :items, only: %i(index)
    end
  end
  resources :items, except: %i(index)

  get 'users/:item_id/done' => 'users#done'
  get 'users/:item_id/doing' => 'users#doing'
  get 'users/:user_id/following' => 'users#following'
  get 'users/:user_id/follower' => 'users#follower'
end
