const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init( // This model will be used to create a table in the database
  {
    id: { // This is the primary key, this auto generates
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: { // This is the content of the comment
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: { // This is the date the comment was created
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: { // This is the foreign key that links the comment to the user
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    post_id: { // This is the foreign key that links the comment to the post
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
        },
      },
  },
  {
    sequelize, // This is the imported connection (the connection to the database)
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment; // This exports the Comment model