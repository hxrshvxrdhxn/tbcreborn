const { getPostBySlug } = require('./lib/posts');

async function run() {
  const post = await getPostBySlug('senior-hire-changes-everything-how-to-get-right');
  console.log("HTML CONTENT:\n", post.content.substring(0, 500));
}

run().catch(console.error);
