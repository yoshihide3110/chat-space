class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :user_id
      t.integer :group_id
      t.string :image
      t.text :content

      t.timestamps
    end
  end
end
