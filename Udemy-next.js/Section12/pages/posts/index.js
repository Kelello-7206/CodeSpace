import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";


function AllPostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta name='description' content='List of posts' />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostPage;