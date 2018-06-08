class User
  include Mongoid::Document
  include ActiveModel::Validations

  has_one :shop

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :age, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :gender, inclusion: { in: %w(M F O), message: "%{value} is not a valid size" }
  validates :address, presence: true

  field :first_name, type: String
  field :last_name, type: String
  field :age, type: Integer
  field :gender, type: String
  field :address, type: Hash, default: {:country => '', :address_1 => '', address_2: '' }
end
