require 'rails_helper'

RSpec.describe UsersController, type: :controller do

    valid_attributes = {
        first_name: 'Eric',
        last_name: 'Kwong',
        age: 23,
        gender: 'M'
    }

    describe "GET index" do
        it "assigns @users" do
            user = User.create
            get :index
            expect(assigns(:users)).to eq([user])
        end

        it "has a 200 status code" do
            get :index
            expect(response.status).to eq(200)
        end
    end

    describe "POST create" do
        describe "with valid params" do
            it "creates a new User" do
              expect {
                post :create, {:user => valid_attributes}
              }.to change(User, :count).by(1)
            end

            it "has a 200 status code" do
                get :index
                expect(response.status).to eq(200)
            end
        end
    end
end
