Rails.application.routes.draw do
  root "page#index"

  #user
  devise_for :users

  #pallet
  get "/generate", to: "pallet#generate", as: "generate_pallets"
  get "/pallets/trending", to: "pallet#trending", as: "trending_pallets"
end
