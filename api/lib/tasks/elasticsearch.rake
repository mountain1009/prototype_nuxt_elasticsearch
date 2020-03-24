namespace :elasticsearch do
  desc 'Elasticsearch のindex作成'
  task :create_index => :environment do
    Task.create_index!
  end

  desc 'Task を Elasticsearch に登録'
  task :import_task => :environment do
    Task.import
  end
end
