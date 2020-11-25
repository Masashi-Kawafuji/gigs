require 'rails_helper'

RSpec.describe "V1::Authentications", type: :request do

  describe "GET /login" do
    it "returns http success" do
      get "/v1/authentication/login"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /logout" do
    it "returns http success" do
      get "/v1/authentication/logout"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /auto_login" do
    it "returns http success" do
      get "/v1/authentication/auto_login"
      expect(response).to have_http_status(:success)
    end
  end

end
