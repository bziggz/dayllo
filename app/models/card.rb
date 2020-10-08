class Card < ApplicationRecord
  belongs_to :list

  validates_presence_of :title, allow_blank: false

  # board_id instance method
end
