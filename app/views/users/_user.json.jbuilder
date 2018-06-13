json.extract! @user, :id, :first_name, :last_name, :address, :age, :gender
json.url user_url(@user, format: :json)