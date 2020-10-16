json.merge! @board.attributes

json.lists(@board.lists) do |list|
  json.merge! list.attributes

  json.cards(list.cards) do |card|
    json.merge! card.attributes

    json.actions(card.actions) do |action|
      json.merge! action.attributes
    end

    json.comments(card.comments) do |comment|
      json.merge! comment.attributes
    end
  end
end
