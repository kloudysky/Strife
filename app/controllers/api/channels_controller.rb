class Api::ChannelsController < ApplicationController
  before_action :require_logged_in

  def index
    @channels = current_user.membered_channels
    render :index
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
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
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
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
    params.require(:channel).permit(:channel_name, :server_id)
  end
end
