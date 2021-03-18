class Api::MessagesController < ApplicationController
    before_action :require_logged_in

    def index
        @messages = Channel.find_by(id: params[:id]).messages
        render :index
    end

    def create 
        @message = Message.new(message_params)

        if @message.save
            render :show
        else
            render json @message.errors.full_messages, status: 422
        end
    end

    def show
        @message = Message.find(params[:id])
        render :show
    end

    def edit
        @message = Message.find(params[:id])
        render :edit
    end

    def update
        @message = Message.find(params[:id])

        if @message.update(message_params)
            #render :show_exceptions
        else
            render :json @message.errors.full_messages, status: 422
        end
    end

    def destroy
        @message = Message.find(params[:id])
        @message.destroy
        # render :index
    end

    private

    def message_params
        params.require(:message).permit(:author_id, :channel_id, :content)
    end
end
