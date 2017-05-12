class Item < ApplicationRecord
  belongs_to :user
  belongs_to :list
  has_many :actions
end
