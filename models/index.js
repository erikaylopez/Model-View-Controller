const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, { // This creates a one-to-many relationship between the user and the post
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(Comment, { // This creates a one-to-many relationship between the user and the comment
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Post.belongsTo(User, { // This creates a one-to-many relationship between the post and the user
    foreignKey: "user_id"
});

Post.hasMany(Comment, { // This creates a one-to-many relationship between the post and the comment
    foreignKey: "post_id",
    onDelete: "CASCADE"
})

Comment.belongsTo(User, { // This creates a one-to-many relationship between the comment and the user
    foreignKey: "user_id"
});

Comment.belongsTo(Post, { // This creates a one-to-many relationship between the comment and the post
    foreignKey: "post_id"
});

module.exports = { User, Post, Comment }; // This exports the User, Post, and Comment models