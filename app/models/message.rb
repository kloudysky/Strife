class Message < ApplicationRecord
  validates :channel_id, :author_id, :content, presence: true
  validates :content, length: { minimum: 1 }, allow_nil: true

  belongs_to :channel, foreign_key: :channel_id, class_name: :Channel

  belongs_to :author, foreign_key: :author_id, class_name: :User

  # after_create_commit { MessageBroadcastJob.perform_later(self) }
end
