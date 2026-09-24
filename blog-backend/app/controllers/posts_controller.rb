class PostsController < ApplicationController
  def index
    @posts = Post.all.order_by(created_at: :desc)
    render json: @posts
  end

  def create
    # Direct JSON parse to bypass ActionPack Ruby 3.4 argument bug
    payload = JSON.parse(request.raw_post)
    post_data = payload["post"] || payload

    @post = Post.new(
      title: post_data["title"],
      author: post_data["author"],
      content: post_data["content"]
    )

    if @post.save
      render json: @post, status: :created
    else
      render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    head :no_content
  rescue Mongoid::Errors::DocumentNotFound
    render json: { error: "Post not found" }, status: :not_found
  end
end