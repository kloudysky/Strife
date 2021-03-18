class Channelmember < ApplicationRecord
  belongs_to :channel, foreign_key: :channel_id, class_name: :Channel

  belongs_to :member, foreign_key: :recipient_id, class_name: :User
end
