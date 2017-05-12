class UsersController < ApplicationController
  def done
    item = Item.find(params[:item_id])
    child_items = Item.includes(:user).where(parent_id: item, status: 2)
    @users = child_items.map{ |item| item.user }
  end

  def doing
    item = Item.find(params[:item_id])
    child_items = Item.includes(:user).where(parent_id: item, status: 1)
    @users = child_items.map{ |item| item.user }
  end

  def follower
    @users = User.where(id: 1)
  end

  def following
    @users = User.where(id: 1)
  end
end
