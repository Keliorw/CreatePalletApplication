class CreateTablePallet < ActiveRecord::Migration[7.0]
  def change
    create_table :pallets do |t|
      t.string :name, default: 'My new pallet'
      t.string :pallet, default: '[]'
      t.references :users
      t.timestamps
    end
  end
end
