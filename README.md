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
|id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
|e-mail|string|null: false, foreign_key: true|


### Association
- belongs_to :id
- belongs_to :name
- belongs_to :e-mail



##messagesテーブル
|Columu|Type|Optionns|
|------|----|--------|
user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|image|string|



### Association
- belongs_to :user_id
- has_many :group_id
- has_many :image
