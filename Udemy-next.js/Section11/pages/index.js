import FeaturedPosts from '../components/home-page/featured-post';
import Hero from '../components/home-page/hero';
import { Fragment } from 'react'

const DUMMY_POSTS = [
    { title, image, excerpt, date, slug }
];

function Homepage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    )
}

export default Homepage;