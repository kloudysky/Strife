class UpdateChannelsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :type, :integer, null: false
  end
end
