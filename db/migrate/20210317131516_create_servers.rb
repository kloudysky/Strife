class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.citext :server_name, null: false
      t.integer :owner_id, null: false
      t.string :img_url

      t.timestamps
    end
    add_index :servers, :owner_id
  end
end
