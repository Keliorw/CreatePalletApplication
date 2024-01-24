class Pallet < ApplicationRecord
  belongs_to :user

  MAX_LOAD_PALLET = 30
end
