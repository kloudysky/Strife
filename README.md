<p align="center"><a href="#" target="_blank"><img src="https://i.imgur.com/yKQzyJc.png" width="400"></a></p>

## About Strife

### Strife is synonymous with Discord and also a clone of the existing application.

[Strife App](https://strifeapp.herokuapp.com/)

### Strife is an invite-only environment to connect with people or groups via messaging, voice and even video.

## Strife Tech Stack

### Backend

- Ruby on Rails
- PostgreSQL

### Frontend

- JavaScript/React + Redux

## Key Features to Note

- Users can DM privately or in groups and can build communities in Servers separated by channels.

```Ruby
ChannelChannel
def subscribed
    @channel = Channel.find_by(id: params[:id])
    stream_for @channel
  end
```

Live chat is the primary feature of Strife and utilizes Action Cable -Integrated WebSockets for Rails [Action Cable](https://www.npmjs.com/package/actioncable).

```Javascript
this.CableApp.messages = this.CableApp.cable.subscriptions.create(
      {
        channel: "ChannelChannel",
        id: this.props.channel.id,
      },
      {
        received: (message) => {
          this.getResponseMessage(message);
        },
      }
    );
  }
```

Action Cable creates a subscription which listens for new messages associated with the appopriate channel.

```Ruby
def create
    @message = Message.new(message_params)
    @channel = Channel.find(message_params['channel_id'])
    if @message.save
      ChannelChannel.broadcast_to(
        @channel,
        { json: @message.to_json(include: :author) },
      )
      render json: @message.to_json(include: :author)
    else
      render json: @message.errors.full_messages, status: 422
    end
  end
```

When a new message is created it broadcasts the message to the appopriate channel and for users who are subscribed to the channel they will receive the message in real time.

- Users can create, edit and add members to servers and channels. Images are stored on AWS's S3 Storage System.
