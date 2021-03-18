class RemoveNullConstraintFromChannelTable < ActiveRecord::Migration[5.2]
  def change
    change_column :channels, :server_id, :integer, null: true
    add_column :users, :avatar, :string
    change_column :servers, :owner_id, :integer, null: true
    rename_column :servers, :img_url, :icon
    add_column :users, :verified, :boolean
  end
end
