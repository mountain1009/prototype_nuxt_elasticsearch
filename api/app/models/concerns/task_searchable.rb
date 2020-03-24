module TaskSearchable
  extend ActiveSupport::Concern
  included do
    include Elasticsearch::Model

    index_name "es_task_#{Rails.env}"
    # インデックスするフィールドの一覧
    INDEX_FIELDS = %w(name detail).freeze

    # マッピング情報
    settings do
      mappings dynamic: 'false' do # 動的にマッピングを生成しない
        indexes :name,   analyzer: 'kuromoji', type: 'text'
        indexes :detail, analyzer: 'kuromoji', type: 'text'
      end
    end
    # インデックスするデータを生成
    # @return [Hash]
    def as_indexed_json(option = {})
      self.as_json.select { |k, _| INDEX_FIELDS.include?(k) }
    end
  end
  class_methods do
    # ④indexを作成するメソッド
    def create_index!
      client = __elasticsearch__.client
      # すでにindexを作成済みの場合は削除する
      client.indices.delete index: self.index_name rescue nil
      # indexを作成する
      client.indices.create(index: self.index_name, body: {settings: self.settings.to_hash, mappings: self.mappings.to_hash})
    end

    def es_search(query)
      __elasticsearch__.search(
          {
              query: {
              multi_match: {
                fields: %w(name detail),
                type: 'cross_fields',
                query: query,
                operator: 'and'
              }
          }
          })
    end
  end
end