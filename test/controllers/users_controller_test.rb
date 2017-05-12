require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get done" do
    get users_done_url
    assert_response :success
  end

  test "should get doing" do
    get users_doing_url
    assert_response :success
  end

end
