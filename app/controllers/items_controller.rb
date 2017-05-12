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
    if @search_word = params[:search_word]
      if @genre == 'new'
        @items = Item.where('id = parent_id AND name LIKE ?', "%#{@search_word}%").order('created_at DESC')
      elsif @genre == 'hot'
        item_ids = Item.group(:parent_id).where('name LIKE(?)', "%#{@search_word}%").order('count_parent_id DESC').count(:parent_id).keys
        @items = item_ids.map{ |id| Item.find id }
      end
    else
      if @genre == 'new'
        @items = Item.where('id = parent_id').order('created_at DESC')
      elsif @genre == 'hot'
        item_ids = Item.group(:parent_id).order('count_parent_id DESC').count(:parent_id).keys
        @items = item_ids.map{ |id| Item.find id }
      end
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
