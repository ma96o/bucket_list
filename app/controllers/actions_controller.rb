class ActionsController < ApplicationController
  def index
    @actions = Action.where(user_id: params[:user_id])
  end
end
