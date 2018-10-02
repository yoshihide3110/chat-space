class AddGroupIdToMembers < ActiveRecord::Migration[5.0]
  def change
    add_column :members, :group_id, :integer
  end
end
