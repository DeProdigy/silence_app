class LambsController < ApplicationController
  def index
    render json: Lamb.all
  end

  def create
    lamb = Lamb.create
    render json: lamb
  end


end
