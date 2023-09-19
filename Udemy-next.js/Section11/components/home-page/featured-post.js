import PostItem from '../posts/post-item';
import classes from './featured-posts.module.css'

function FeaturedPosts(props) {
  return <section className={classes.latest}>
    <h2>Featured Posts</h2>
    <PostItem posts={props.posts} />
  </section>
}

export default FeaturedPosts;