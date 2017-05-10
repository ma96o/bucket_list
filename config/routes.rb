Rails.application.routes.draw do
  resources :users, only: %i(index edit) do
    resources :actions, only: %i(index)
    resources :lists do
      resources :items, only: %i(index)
    end
  end
  resources :items, except: %i(index)

  get 'users/:user_id/success' => 'items#success'
  get 'users/:user_id/trash' => 'items#trash'
  get 'items/trend/:hot_new' => 'items#trend'
  get 'users/:item_id/done' => 'users#done'
  get 'users/:item_id/doing' => 'users#doing'
  get 'users/:user_id/following' => 'users#following'
  get 'users/:user_id/follower' => 'users#follower'
end
