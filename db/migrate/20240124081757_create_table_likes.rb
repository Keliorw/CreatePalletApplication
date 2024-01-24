class CreateTableLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :pallets
      t.references :users
      t.timestamps
    end
  end
end
