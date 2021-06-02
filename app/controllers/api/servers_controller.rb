class Api::ServersController < ApplicationController
  before_action :require_logged_in

  # before_action :check_if_owner, only: %i[edit update destroy]

  def create
    @server = Server.new(server_params)
    if @server.save
      @server.generate_unique_invite_code
      firstMember =
        ServerMember.new(server_id: @server.id, member_id: @server.owner_id)
      if firstMember.save
        gen_channel =
          Channel.create(
            channel_name: 'general',
            server_id: @server.id,
            channel_type: 0,
            owner_id: @server.owner_id,
          )
        firstChannelMember =
          Channelmember.new(
            channel_id: gen_channel.id,
            recipient_id: @server.owner_id,
          )
        if firstChannelMember.save
          @servers = current_user.membered_servers
          render json: @servers, include: %i[channels members]
        end
      else
        render json: @server.errors.full_messages, status: 422
      end
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def index
    @servers = current_user.membered_servers
    render json: @servers, include: %i[channels members]
  end

  def edit
    @server = Server.find(params[:id])
    render :edit
  end

  def show
    @server = Server.find(params[:id])
    render json: @server.to_json(include: :members)
  end

  def update
    @server = Server.find(params[:id])

    if @server.update(server_params)
      # render json: @server.to_json(include: :members)
      msg = ['Server name updated']
      render json: msg
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
    @server.destroy
    msg = { status: 'ok', message: 'Success!' }
    render json: msg
  end

  def add_member
    user = User.find_by(username: [server_member_params[:member_username]])
    @server_member =
      ServerMember.new(
        member_id: user.id,
        server_id: server_member_params[:server_id],
      )

    if @server_member.save
      @servers = current_user.membered_servers
      render json: @servers, include: %i[channels members]
    else
      render json: @server_member.errors.full_messages, status: 422
    end
  end

  def get_members
    @server_members = Server.find_by(id: params[:id]).members
    render json: @server_members
  end

  def remove_member
    @server = Server.find(params[:id])

    @server_member =
      ServerMember
        .find_by(server_id: params[:id])
        .where(user_id: current_user.id)
    @server_member.destroy
    msg = { status: 'ok', message: 'Success!' }
    render json: msg
  end

  def join_server
    @server = Server.find_by(invite_code: params[:inviteCode])
    if @server
      if (@server.members.find_by(id: current_user.id))
        @server.errors.add(:error, 'You are already a member of this server')
        render json: @server.errors.full_messages, status: 422
        # msg = ['You are already a member of this server']
        # render json: msg
      else
        member =
          ServerMember.new(server_id: @server.id, member_id: current_user.id)
        if member.save
          channels = @server.channels
          channels.each do |channel|
            Channelmember.create(
              channel_id: channel.id,
              recipient_id: current_user.id,
            )
          end
          @servers = current_user.membered_servers
          render json: @servers, include: %i[channels members]
        end
      end
    else
      @server = Server.last
      @server.errors.add(:error, 'The invite code is invalid or has expired')
      render json: @server.errors.full_messages, status: 422
    end
  end

  def leave_server
    @server = Server.find(params[:id])
    server_member =
      ServerMember.find_by(server_id: params[:id], member_id: current_user.id)
    server_member.destroy
    msg = { status: 'ok', message: 'Success!' }
    render json: msg
  end

  private

  def server_params
    params.require(:server).permit(:owner_id, :server_name, :icon)
  end

  def server_member_params
    params.require(:serverMember).permit(:server_id, :member_username)
  end

  def check_if_member
    render json: ['You do not have access to this server'], status: 401
  end

  def check_if_owner
    if current_user.id != Server.find(params[:id]).owner_id
      render json: ['Whoa whoa is this malicious behavior??'], status: 401
    end
  end
end
