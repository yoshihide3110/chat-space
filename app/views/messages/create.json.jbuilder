json.body       @message.body
json.user_name  @message.user.name
<<<<<<< HEAD
=======
json.group_id   @message.group.id
json.date       @message.created_at
>>>>>>> master
json.image      @message.image.url
json.id         @message.id
json.date       @message.created_at.to_s(:datetime)
