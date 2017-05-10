class ItemsController < ApplicationController
  layout 'application_prof', except: %i(trend)

  before_action :get_user, only: %i(index success trash)
  before_action :get_list, only: %i(index)

  def index
    @lists = @user.lists
    @items = @list.items
  end

  def success
    @items = @user.items.where(status: 2)
  end

  def trash
    @items = @user.items.where(status: 3)
  end

  def trend
    @genre = params[:hot_new]
    if @genre == "new"
      @items = Item.where(parent_id: nil).order('created_at DESC')
    end
  end

  private
    def get_user
      @user = User.find(params[:user_id])
    end

    def get_list
      @list = List.find(params[:list_id])
    end
end
