class Api::ChannelsController < ApplicationController
    before_action :require_logged_in

    def index
        @channels = Server.find_by(id: params[:id]).channels
        render :index
    end

    def create 
        @channel = Channel.new(channel_params)

        if @channel.save
            render :show
        else
            render json @channel.errors.full_messages, status: 422
        end
    end

    def show
        @channel = Channel.find(params[:id])
        render :show
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
            render :json @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @message = Message.find(params[:id])
        @message.destroy
        render :index
    end

    private

    def channel_params
        params.require(:channel).permit(:channel_name, :server_id)
    end
end
