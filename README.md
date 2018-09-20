# README

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index:true, unique: true|
|e-mail|string|null: false, unique: true|

has_many :messages
has_many :members
has_many :groups, through: :members


## messagesテーブル
|Column|Type|Optionns|
|------|----|--------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|image|string|
|body|text|



### Association
- belongs_to :user
- belongs_to :group



## groupsテーブル
|Column|Type|Optionns|
|------|----|--------|
|name|text|null: false|

### Association
has_many :members
has_many :users, through: :members
has_many :messages
