import PostHeader from "./post-header";
import classes from './post-content.module.css'

const DUMMY_POSTS = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  content: '# First post'
}


function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
  <article className={classes.content}>
    <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
    {DUMMY_POSTS.content} 
  </article>
  )
}

export default PostContent;