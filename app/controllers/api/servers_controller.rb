class Api::ServersController < ApplicationController
    before_action :require_logged_in
    before_action :check_if_owner, only: [:edit, :update, :destroy]

    def create
        @server = Server.new(server_params)

        if @server.save
            render :show
        else
            render json @server.errors.full_messages, status: 422
        end
    end

    def index
        @servers = current_user.membered_servers

        render :index
    end

    def edit
        @server = Server.find(params[:id])

        render :edit
    end

    def show
        @server = Server.find(params[:id])

        render :show
    end

    def update
        @server = Server.find(params[:id])

        if @server.update(server_params)
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def destroy
        @server = Server.find(params[:id])
        @server.destroy
        render :index
    end

    private

    def server_params
        params.require(:server).permit(:owner_id, :server_name)
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
