class LambController < ApplicationController
  def index
  end

  def create
    Lamb.create
  end
end
