class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :create, status: :created
    else
      @error = @comment.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :card_id)
  end
end
