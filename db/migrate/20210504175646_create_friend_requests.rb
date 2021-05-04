class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :requestor_id, null: false
      t.integer :receiver_id, null: false
      t.timestamps
    end
    add_index :friend_requests, %i[requestor_id receiver_id], unique: true
  end
end
