class Card < ApplicationRecord
  belongs_to :list
  has_many :comments

  validates_presence_of :title, allow_blank: false
  # board_id instance method
  def board_id
    list.board_id
  end

  def attributes
    super.merge({ board_id: board_id })
  end
end
