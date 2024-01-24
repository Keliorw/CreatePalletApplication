class PalletController < ApplicationController
  skip_before_action :verify_authenticity_token

  def generate

  end

  def trending

  end

  def save_pallet
    pallet = Pallet.new pallet_params
    pallet.user_id = current_user.id
    pallet.save
  end

  def get_user_pallets
    pallets = Pallet.where(user_id: current_user.id)
    return render json: {pallets: pallets}.to_json, status: 200
  end

  def get_trend_pallets
    pallets = Pallet.all.limit(Pallet::MAX_LOAD_PALLET)
    return render json: {pallets: pallets}.to_json, status: 200
  end

private

  def pallet_params
    params.require(:pallet_params).permit(pallet: [])
  end
end