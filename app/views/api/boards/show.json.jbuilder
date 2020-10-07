json.merge! @board.attributes

json.lists(@board.lists) do |list|
  json.merge! list.attributes

  json.cards(list.cards) do |card|
    # card.attributes
    json.id card.id
    json.title card.title
    json.labels card.labels
    json.description card.description
    json.due_date card.due_date
    json.list_id card.list_id
    json.board_id list.board_id
  end
end
