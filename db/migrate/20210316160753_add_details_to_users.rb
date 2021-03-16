class AddDetailsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :citext, null: false
    add_column :users, :phone, :decimal
    add_column :users, :birthday, :date, null: false
    add_index :users, :email, unique: true
    add_index :users, :phone, unique: true
  end
end
