class UserMailer < ApplicationMailer
  default from: 'kwfjmss@gmail.com'

  def activate_account_email
    @user = params[:user]
    mail(to: @user.email, subject: 'アカウント有効化')
  end
end
