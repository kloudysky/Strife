@dm_channels.each do |channel|
  json.set! channel.id do
    json.partial! 'channel', channel: channel
    channel.members.each { |member| json.partial! 'member', member: member }
  end
end
