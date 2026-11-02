import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required"
      });
    }

    const post = await Post.create({
      title,
      content,
      author: req.user.id
    });

    res.status(201).json({
      message: "Post created successfully",
      post
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create post",
      error: error.message
    });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name email");

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve posts",
      error: error.message
    });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "name email"
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve post",
      error: error.message
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You can only update your own posts"
      });
    }

    if (title !== undefined) post.title = title;
    if (content !== undefined) post.content = content;

    await post.save();

    res.status(200).json({
      message: "Post updated successfully",
      post
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update post",
      error: error.message
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You can only delete your own posts"
      });
    }

    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Post deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete post",
      error: error.message
    });
  }
};