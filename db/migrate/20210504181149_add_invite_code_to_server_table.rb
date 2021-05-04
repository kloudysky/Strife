class AddInviteCodeToServerTable < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :invite_code, :string
    add_index :servers, :invite_code, unique: true
  end
end
