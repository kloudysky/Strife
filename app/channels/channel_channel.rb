class ChannelChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find_by(id: params[:id])
    stream_for @channel
  end

  def received(data)
    ChannelChannel.broadcast_to(
      @channel,
      {
        channel: @channel,
        members: @channel.members,
        messages: @channel.messages,
      },
    )
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # def speak(data)
  #   author = get_auhtor(data['author_id'])
  #   channel_id = data['channel_id']
  #   content = data['content']

  #   raise 'No channel_id!' if channel_id.blank?
  #   channel = get_channel(channel_id) # A conversation is a room
  #   raise 'No channel found!' if channel.blank?
  #   raise 'No message!' if content.blank?

  #   # adds the message sender to the conversation if not already included
  #   channel.members << author unless channel.members.include?(author)

  #   # saves the message and its data to the DB
  #   # Note: this does not broadcast to the clients yet!
  #   Message.create!(channel_id: channel_id, author: author, content: content)
  # end

  # # Helpers

  # def get_channel(channel_id)
  #   Channel.find_by(id: channel_id)
  # end

  # def get_author(id)
  #   User.find_by(id: id)
  # end
end
