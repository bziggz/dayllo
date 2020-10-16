class Action < ApplicationRecord
  belongs_to :card

  validates_presence_of :description, allow_blank: false
end
