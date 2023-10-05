const { createConnection } = require('typeorm');

const bootstrap = async () => {
  setTimeout(() => {
    console.log('You can also get posts from the second process:');
    createConnection().then(async connection => {
      const posts = await connection.getRepository('Post').find();
      console.log('posts:', posts);
    });
  }, 5000);
};

module.exports = async () => {
  await bootstrap();
};
