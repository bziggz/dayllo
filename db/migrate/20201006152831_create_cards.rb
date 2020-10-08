class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :title
      t.string :labels, array: true, default: [], nil: false
      t.string :description
      t.date :due_date
      t.integer :list_id
      t.timestamps
    end
  end
end
