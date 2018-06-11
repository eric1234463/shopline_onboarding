require 'rails_helper'

RSpec.describe User, type: :model do
  describe '#first_name' do
    it { should validate_presence_of(:first_name) }
  end
  describe '#gender' do
    it { should allow_value("M").for(:gender) }
    it { should allow_value("F").for(:gender) }
    it { should allow_value("O").for(:gender) }
  end

  describe '#age' do
    it { should validate_presence_of(:age) }
  end
end
