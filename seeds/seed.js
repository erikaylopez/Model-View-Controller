const sequelize = require("../config/connection");  
const { User, Post, Comment } = require("../models");
const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  let userinfo = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log(userinfo);
  console.log("User data seeded");

  await Post.bulkCreate(postData);

    console.log("Post data seeded");

  await Comment.bulkCreate(commentData);

  console.log("Comment data seeded");

  process.exit(0);
};


seedDatabase();

