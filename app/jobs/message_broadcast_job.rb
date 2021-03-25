class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    # Do something later
    payload = {
      channel_id: message.channel.id,
      content: message.content,
      author_id: message.author,
      participants: message.channel.members.collect(&:id),
    }

    ActionCable.server.broadcast(build_channel_id(message.channel.id), payload)
  end

  def build_channel_id(id)
    "channel-#{id}"
  end
end
