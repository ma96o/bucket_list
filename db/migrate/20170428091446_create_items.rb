class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name
      t.text :comment
      t.datetime :dead_line
      t.integer :status
      t.integer :priority

      t.timestamps
    end
  end
end
