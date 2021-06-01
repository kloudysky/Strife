class Api::ChannelsController < ApplicationController
  before_action :require_logged_in

  def index
    @channels = current_user.membered_channels
    render :index
  end

  def create
    create_channel_params = {}
    create_channel_params[:channel_name] = channel_params[:channel_name]
    create_channel_params[:owner_id] = channel_params[:owner_id]
    create_channel_params[:channel_type] = channel_params[:channel_type]
    create_channel_params[:server_id] = channel_params[:server_id]
    puts 'CHANNEL PARAMS------------------'
    puts create_channel_params
    puts '-------------------'
    @channel = Channel.new(create_channel_params)
    members = [current_user]
    if channel_params[:users]
      channel_params[:users].each do |member|
        members.push(User.find_by(username: member))
        puts 'MEMBERS---------'
        puts members
      end
    else
      members = Server.find_by(id: channel_params[:server_id]).members
    end
    puts members

    if @channel.save
      members.each do |member|
        Channelmember.create(channel_id: @channel.id, recipient_id: member.id)
      end
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def show
    @channel = @channel.find(params[:id])
    render json: @channel.to_json(include: :messages)
  end

  def edit
    @channel = Channel.find(params[:id])
    render :edit
  end

  def update
    @channel = Channel.find(params[:id])

    if @channel.update(channel_params)
      msg = ['Server name updated']
      render json: msg
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    render :index
  end

  def dm_channels
    @dm_channels = current_user.membered_channels.where('channel_type > 0')
    render json: @dm_channels.to_json(include: :members)
  end

  def server_channels
    @server = Server.find_by(id: params[:id])
    @channels = @server.channels
    render :index
  end

  private

  def channel_params
    params
      .require(:channel)
      .permit(:channel_name, :server_id, :owner_id, :channel_type, users: [])
  end
end
