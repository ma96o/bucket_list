class UsersController < ApplicationController
  def done
    @users = User.where(id: 1)
  end

  def doing
    @users = User.where(id: 1)
  end

  def follower
    @users = User.where(id: 1)
  end

  def following
    @users = User.where(id: 1)
  end
end
