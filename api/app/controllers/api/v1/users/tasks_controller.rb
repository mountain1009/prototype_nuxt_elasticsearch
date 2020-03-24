class Api::V1::Users::TasksController < ApplicationController
  before_action :authenticate!

  def index
    if search_word.present?
      tasks = Task.es_search(search_word).records.where(user: @current_user).limit(100)
    else
      tasks = Task.where(user: @current_user).limit(100)
    end
    render json: tasks
  end

  def show;end

  def create
    task = @current_user.tasks.new(new_task_params)
    task.save
    tasks = Task.where(user: @current_user).limit(100)
    render json: task_kind_separate(tasks)
  end

  def update
    task = @current_user.tasks.find(params[:id])
    task.update(edit_task_params)
    tasks = Task.where(user: @current_user).limit(100)
    render json: tasks
  end

  private

  def new_task_params
    params.require(:task).permit(:name, :detail, :status)
  end

  def edit_task_params
    params.require(:task).permit(:name, :detail, :status)
  end

  def search_word
    @search_word ||= params[:search_word]
  end
end
