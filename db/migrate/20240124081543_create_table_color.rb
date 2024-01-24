class CreateTableColor < ActiveRecord::Migration[7.0]
  def change
    create_table :colors do |t|
      t.references :pallets
      t.string :value
      t.string :name, default: ''
      t.timestamps
    end
  end
end
