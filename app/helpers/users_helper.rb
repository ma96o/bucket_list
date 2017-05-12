module UsersHelper
  def doing_users(item)
    child_items = Item.includes(:user).where(parent_id: item, status: 1)
    @users = child_items.map{ |i| i.user }
  end

  def done_users(item)
    child_items = Item.includes(:user).where("parent_id = ? AND status IN (?)", item, [2, 3])
    @users = child_items.map{ |i| i.user }
  end
end
