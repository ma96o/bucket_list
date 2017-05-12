class User < ApplicationRecord
  has_many :lists
  has_many :items
  has_many :actions
end
