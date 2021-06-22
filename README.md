<p align="center"><a href="#" target="_blank"><img src="https://strifeapp.herokuapp.com/strifeapp_thumbnail.png" width="400"></a></p>

## About Strife

### Strife is synonymous with [Discord](https://discord.com) and also a clone of the existing application.

[Strife App](https://strifeapp.herokuapp.com/)

### Strife is an community driven environment to connect with people or groups via messaging.

## Strife Tech Stack

### Backend

- Ruby on Rails
- PostgreSQL
- Redis
- ActionCable

### Frontend

- JavaScript/React + Redux

## Key Features

- CRUD for Servers
- Add users to servers
- CRUD for Channels
- Live messaging within Server Channels
- Create live DM's and Group DM's

<p align="center"><a href="#" target="_blank"><img src="https://media.giphy.com/media/lIexU4K6lWBdFwYMP7/giphy.gif" width="400"></a></p>
Live chat is the primary feature of Strife and utilizes ActionCable - Integrated WebSockets for Rails [Action Cable](https://www.npmjs.com/package/actioncable).

```Ruby
ChannelChannel
def subscribed
    @channel = Channel.find_by(id: params[:id])
    stream_for @channel
  end
```

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

<p align="center"><a href="#" target="_blank"><img src="https://media.giphy.com/media/3CFUoxJKBx9GI4u93L/giphy.gif" width="400"></a></p>

- Users can create, edit and add members to servers and channels.
