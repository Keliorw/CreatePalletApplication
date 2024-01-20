Rails.application.routes.draw do
  devise_for :users
  root "application#index"
  get "pallets/trending", to: "pallet#trending", as: "trending_pallets"
  get "generate", to: "user#generate", as: "generate_pallets"
end
