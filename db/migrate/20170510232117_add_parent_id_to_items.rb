class AddParentIdToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :parent_id, :integer, default: nil
  end
end
