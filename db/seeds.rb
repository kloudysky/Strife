# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  username: 'kloud',
  email: 'kloud@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
)
User.create(
  username: 'tifa',
  email: 'tifa@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
)
User.create(
  username: 'barret',
  email: 'barret@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
)
User.create(
  username: 'zack',
  email: 'zack@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
)
User.create(
  username: 'biggs',
  email: 'biggs@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
)
User.create(
  username: 'wedge',
  email: 'wedge@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
)
User.create(
  username: 'Rino',
  email: 'rino@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
)
User.create(
  username: 'Rude',
  email: 'rude@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
)
User.create(
  username: 'Tseng',
  email: 'tseng@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
)
User.create(
  username: 'Elena',
  email: 'elena@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
)

Server.create(owner_id: 2, server_name: '7th Heaven')
Server.create(owner_id: 4, server_name: 'SOLDIER')
Server.create(owner_id: 3, server_name: 'AVALANCHE')
Server.create(owner_id: 9, server_name: 'SHINRA')

ServerMember.create(server_id: 1, member_id: 2)
ServerMember.create(server_id: 1, member_id: 1)
ServerMember.create(server_id: 1, member_id: 3)
ServerMember.create(server_id: 3, member_id: 1)
ServerMember.create(server_id: 2, member_id: 4)
ServerMember.create(server_id: 2, member_id: 1)
ServerMember.create(server_id: 3, member_id: 3)
ServerMember.create(server_id: 3, member_id: 2)
ServerMember.create(server_id: 3, member_id: 5)
ServerMember.create(server_id: 3, member_id: 6)
ServerMember.create(server_id: 4, member_id: 9)
ServerMember.create(server_id: 4, member_id: 10)
ServerMember.create(server_id: 4, member_id: 8)
ServerMember.create(server_id: 4, member_id: 7)

Channel.create(
  channel_name: 'bombing mission',
  server_id: 3,
  channel_type: 0,
  owner_id: 3,
)
Channel.create(
  channel_name: 'training',
  server_id: 2,
  channel_type: 0,
  owner_id: 4,
)
Channel.create(
  channel_name: 'Sephiroth',
  server_id: 4,
  channel_type: 0,
  owner_id: 9,
)
Channel.create(
  channel_name: 'slums',
  server_id: 1,
  channel_type: 0,
  owner_id: 2,
)
Channel.create(channel_name: 'DM', channel_type: 1, owner_id: 1)
Channel.create(channel_name: 'DM', channel_type: 2, owner_id: 2)

Channelmember.create(channel_id: 5, recipient_id: 1)
Channelmember.create(channel_id: 5, recipient_id: 2)
Channelmember.create(channel_id: 6, recipient_id: 1)
Channelmember.create(channel_id: 6, recipient_id: 9)
Channelmember.create(channel_id: 6, recipient_id: 5)
Channelmember.create(channel_id: 1, recipient_id: 1)
Channelmember.create(channel_id: 1, recipient_id: 3)
Channelmember.create(channel_id: 1, recipient_id: 2)
Channelmember.create(channel_id: 1, recipient_id: 5)
Channelmember.create(channel_id: 1, recipient_id: 6)

Message.create(channel_id: 1, author_id: 1, content: 'hello')
Message.create(channel_id: 1, author_id: 2, content: 'hello')
Message.create(channel_id: 1, author_id: 3, content: 'hello')
Message.create(channel_id: 5, author_id: 1, content: 'hello')
Message.create(channel_id: 5, author_id: 2, content: 'hello')
