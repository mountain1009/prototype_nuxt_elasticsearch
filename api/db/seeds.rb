@user = User.create(email: "test@gmail.com", password: "password", name: "test")
[*1..1000].map do |val|
  Task.create(user: @user, name: "task_#{val}", detail: "task_detail_#{val}", status: :unsupported).errors
end