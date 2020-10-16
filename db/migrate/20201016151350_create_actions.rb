class CreateActions < ActiveRecord::Migration[6.0]
  def change
    create_table :actions do |t|
      t.integer :card_id
      t.string :description
      t.timestamps
    end
  end
end
