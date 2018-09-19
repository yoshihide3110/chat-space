# README

## membersテーブル

|Columu|Type|Options|
|------|----|-------|
|user_id|integer|index: true, null: false, foreign_key: true|
|group_id|integer|index: true, null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
|Columu|Type|Options|
|------|----|-------|
|name|string|null: false, |
|e-mail|string|null: false, unique: true|

hasm_any :message
belongs_to :member
has_many :groups, through


## messagesテーブル
|Columu|Type|Optionns|
|------|----|--------|
|user_id|integer|null: false, foreign_key: true, index: true|
|group_id|integer|null: false, foreign_key: true, index: true|
|image|string|
|body|text|



### Association
- belongs_to :users
- belongs_to :groups



## groupsテーブル
|Columu|Type|Optionns|
|------|----|--------|
|name|text|null: false, foreign_key: true|

### Association
has_many :users, :through:members
has_many :members
has_many :messages
