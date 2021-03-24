class Channel < ApplicationRecord
  validates :channel_name, :channel_type, presence: true
  validates :channel_name, length: { minimum: 2 }, allow_nil: true

  # belongs_to :server, foreign_key: :server_id, class_name: :Server

  has_many :messages,
           foreign_key: :channel_id,
           class_name: :Message,
           dependent: :destroy

  has_many :channelmembers, foreign_key: :channel_id, class_name: :Channelmember

  has_many :members, through: :channelmembers, source: :member
end
