json.body       @message.body
json.user_name  @message.user.name
json.group_id   @message.group.id
json.image      @message.image.url
json.id         @message.id
json.date       @message.created_at.to_s(:datetime)
