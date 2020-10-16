json.merge! @card.attributes

json.actions(@card.actions) do |action|
  json.merge! action.attributes
end

json.comments(@card.comments) do |comment|
  json.merge! comment.attributes
end
