import Link from 'next/link'
 
function HomePage() {
    return (
    <div>
        <h1>Home page Welcome</h1>
        <ul>
            <li><Link  href='/portfolio'>Portfolio</Link></li>
            <li><Link  href='/clients'>Client</Link></li>
            <li></li>
        </ul>
    </div>
    );
}

export default HomePage;