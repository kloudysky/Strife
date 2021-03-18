class Channelmember < ApplicationRecord
  belongs_to :channel, foreign_key: :channel_id, class_name: :Channel

  belongs_to :member, foreign_key: :member_id, class_name: :User

  belongs_to :owner, foreign_key: :owner_id, class_name: :User
end
