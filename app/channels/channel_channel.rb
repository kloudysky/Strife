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
end
