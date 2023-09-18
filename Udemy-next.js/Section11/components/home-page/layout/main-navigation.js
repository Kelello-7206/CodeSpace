import Link from 'next/link'

function MainNavigation(props) {
  return (
    <header>
      <Link href='/'>
        <a>
          <Logo />
        </a>
        </Link>
      <nav>
        <ul>
          <li><Link href='/posts'>Posts</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;