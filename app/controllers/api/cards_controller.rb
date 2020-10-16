class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def create
    @card = Card.new(new_card_params)

    if @card.save
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update
    @card = Card.find(params[:id])

    @card.assign_attributes(update_card_params)

    ActiveRecord::Base.transaction do
      create_actions
      if @card.save
        render :update, status: :created
      else
        @error = @card.errors.full_messages.join(', ')
        render 'api/shared/error', status: :unprocessable_entity
      end
    end

  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def new_card_params
    params.require(:card).permit(:title, :list_id)
  end

  def update_card_params
    params.require(:card).permit(:id, :title, :list_id, :description, :due_date, :labels => [])
  end

  def create_actions
    if @card.due_date_changed?
      if @card.due_date_was
        if @card.due_date
          @card.actions.create!(description: "Changed due date to #{@card.due_date}")
        else
          @card.actions.create!(description: "Removed due date")
        end
      else
        @card.actions.create!(description: "Added due date to #{@card.title}")
      end
    end

    # if @card.completed_changed?
    #   if @card.completed
    #     @card.actions.create!(description: "Marked completed")
    #   else
    #     @card.actions.create!(description: "Marked incomplete")
    #   end
    # end

    if @card.title_changed?
      @card.actions.create!(description: "Title changed to #{@card.title}")
    end

    if @card.labels_changed?
      @card.actions.create!(description: "The labels were updated")
    end

    if @card.list_id_changed?
      @card.actions.create!(description: "Moved to #{@card.list.title}")
    end
  end
end
