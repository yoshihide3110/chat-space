class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates :group_id, presence: true, unless: :image?
  mount_uploader :image, ImageUploader

end


