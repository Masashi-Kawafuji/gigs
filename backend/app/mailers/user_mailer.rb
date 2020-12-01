class UserMailer < ApplicationMailer
  def activate_account_email
    @user = params[:user]
    @activate_token = params[:activate_token]
    mail(to: @user.email, subject: 'アカウント有効化')
  end
end
