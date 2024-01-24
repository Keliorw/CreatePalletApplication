class CreateTableLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :pallet
      t.references :user
      t.timestamps
    end
  end
end
