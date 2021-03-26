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
  avatar: 'https://cdn.myanimelist.net/images/characters/14/112730.webp',
)
User.create(
  username: 'tifa',
  email: 'tifa@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
  avatar:
    'https://preview.redd.it/f67w2u343r631.jpg?width=400&format=pjpg&auto=webp&s=da19becfaafdec603ad3cbd1e62ea50c058dbe0f',
)
User.create(
  username: 'barret',
  email: 'barret@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
  avatar:
    'https://static.wikia.nocookie.net/finalfantasy/images/a/ac/Barret_PortraitNB.png/revision/latest/scale-to-width-down/250?cb=20130203032221',
)
User.create(
  username: 'zack',
  email: 'zack@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
  avatar:
    'https://static.wikia.nocookie.net/finalfantasy/images/5/55/BCVIIZack.jpg/revision/latest?cb=20110616014940',
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
  avatar:
    'https://static.wikia.nocookie.net/finalfantasy/images/9/9f/DFFOO_Reno.png/revision/latest?cb=20200321060829',
)
User.create(
  username: 'Rude',
  email: 'rude@ff7.com',
  password: '123456',
  birthday: '03/12/1988',
  avatar: 'https://dissidiadb.com/static/img/rude.72e2740.png',
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

User.create(
  username: 'Shanto',
  email: 'shanto@shanto.com',
  password: '123456',
  birthday: '03/12/1988',
  avatar: 'https://i1.sndcdn.com/avatars-Z82QR7hwZvIXkO2Y-lT6zdw-t500x500.jpg',
)

User.create(
  username: 'Charm',
  email: 'charm@charm.com',
  password: '123456',
  birthday: '03/12/1988',
  avatar:
    'https://cdna.artstation.com/p/assets/images/images/032/882/602/large/n-i-x-e-u-11dc7a49-7c91-4f62-ba7f-c4c543162b31.jpg?1607740422',
)

User.create(
  username: 'JoshE',
  email: 'joshe@joshe.com',
  password: '123456',
  birthday: '03/12/1988',
  avatar:
    'https://cdn.icon-icons.com/icons2/2108/PNG/512/discord_icon_130958.png',
)

User.create(
  username: 'Potato',
  email: 'potato@potato.com',
  password: '123456',
  birthday: '03/12/1988',
  avatar:
    'https://api.time.com/wp-content/uploads/2014/11/potato.jpg?w=1428&quality=70',
)

User.create(
  username: 'cat ritz wonton',
  email: 'ariton@ariton.com',
  password: '123456',
  birthday: '03/12/1988',
  avatar: 'https://www.maiken2051.com/images/hirez/Killua%20shades.jpg',
)

User.create(
  username: 'BORIS-8',
  email: 'boris8@boris8.com',
  password: '123456',
  birthday: '03/12/1988',
  avatar: 'https://www.maiken2051.com/images/hirez/Killua%20shades.jpg',
)

Server.create(owner_id: 2, server_name: '7th Heaven')
Server.create(
  owner_id: 1,
  server_name: 'a/A 12-28-20',
  icon:
    'https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png',
)
Server.create(owner_id: 4, server_name: 'AVALANCHE')
Server.create(owner_id: 3, server_name: 'SOLDIER')
Server.create(owner_id: 9, server_name: 'SHINRA')

ServerMember.create(server_id: 1, member_id: 2)
ServerMember.create(server_id: 1, member_id: 1)
ServerMember.create(server_id: 1, member_id: 3)
ServerMember.create(server_id: 3, member_id: 1)
ServerMember.create(server_id: 2, member_id: 11)
ServerMember.create(server_id: 2, member_id: 12)
ServerMember.create(server_id: 2, member_id: 13)
ServerMember.create(server_id: 2, member_id: 14)
ServerMember.create(server_id: 2, member_id: 15)
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
  channel_name: 'general',
  server_id: 3,
  channel_type: 0,
  owner_id: 3,
)
Channel.create(
  channel_name: 'general',
  server_id: 2,
  channel_type: 0,
  owner_id: 4,
)
Channel.create(
  channel_name: 'general',
  server_id: 4,
  channel_type: 0,
  owner_id: 9,
)
Channel.create(
  channel_name: 'general',
  server_id: 1,
  channel_type: 0,
  owner_id: 2,
)
Channel.create(channel_name: 'tifa', channel_type: 1, owner_id: 1)
Channel.create(channel_name: 'Group DM', channel_type: 2, owner_id: 2)
Channel.create(
  channel_name: 'final-projects',
  server_id: 2,
  channel_type: 0,
  owner_id: 1,
)
Channel.create(
  channel_name: 'gaming',
  server_id: 2,
  channel_type: 0,
  owner_id: 1,
)
Channel.create(
  channel_name: 'resources',
  server_id: 2,
  channel_type: 0,
  owner_id: 1,
)
Channel.create(
  channel_name: 'anime',
  server_id: 2,
  channel_type: 0,
  owner_id: 1,
)
Channel.create(
  channel_name: 'wellness',
  server_id: 2,
  channel_type: 0,
  owner_id: 1,
)
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
Channelmember.create(channel_id: 7, recipient_id: 11)
Channelmember.create(channel_id: 8, recipient_id: 12)
Channelmember.create(channel_id: 9, recipient_id: 13)
Channelmember.create(channel_id: 10, recipient_id: 14)
Channelmember.create(channel_id: 11, recipient_id: 15)

Message.create(channel_id: 1, author_id: 1, content: 'hello')
Message.create(channel_id: 1, author_id: 2, content: 'hello')
Message.create(channel_id: 1, author_id: 3, content: 'hello')
Message.create(channel_id: 5, author_id: 1, content: 'hello')
Message.create(channel_id: 5, author_id: 2, content: 'hello')
