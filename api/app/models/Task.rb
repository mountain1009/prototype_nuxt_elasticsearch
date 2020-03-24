class Task < ApplicationRecord
  include Elasticsearch::Model
  include TaskSearchable

  belongs_to :user

  enum status: {
      unsupported: 0,
      processing: 1,
      completed: 2
  }

  after_update do
    self.__elasticsearch__.update_document
  end

  after_save do
    self.__elasticsearch__.index_document
  end
end
