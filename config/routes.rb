Rails.application.routes.draw do
  root "page#index"

  #user
  devise_for :users

  #pallet
  get "/generate", to: "pallet#generate", as: "generate_pallets"
  get "/user_pallets", to: "pallet#user_pallets", as: "user_pallets"
  get "/pallets/trending", to: "pallet#trending", as: "trending_pallets"
  post "/pallets/save_pallet", to: "pallet#save_pallet"
  post "/pallets/get_user_pallets", to: "pallet#get_user_pallets"
  post "/pallets/get_trend_pallets", to: "pallet#get_trend_pallets"
end
