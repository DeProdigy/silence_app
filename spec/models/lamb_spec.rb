require 'spec_helper'

describe Lamb do
  let(:lamb) { Lamb.new }

  it "has a boolean is_silent set to true" do
    expect(lamb.is_silent).to be true
  end



end
