class CreateChannelmembers < ActiveRecord::Migration[5.2]
  def change
    create_table :channelmembers do |t|
      t.integer :channel_id, null: false
      t.integer :recipient_id, null: false

      t.timestamps
    end
  end
end
