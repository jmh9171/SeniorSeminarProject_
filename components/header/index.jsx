import Link from 'next/link'
import Styles from '../index.module.css'

const Header = () => (
  <header>
    <ul className={Styles.ul}>
      <li className={Styles.header1}>
        <Link href="/loginPage">
          <a>Login</a>
        </Link>
      </li>
      <li className={Styles.header1}>
        <Link href="/feed">
          <a>Feed</a>
        </Link>
      </li>
      <li className={Styles.header1}>
        <Link href="/settings" >
          <a>Settings</a>
        </Link>
      </li>
      <li className={Styles.header1}>
        <Link href="profile">
          <a>Profile</a>
        </Link>
      </li>
      <li className={Styles.header1}>
        <Link href="/groups" >
          <a>My Groups</a>
        </Link>
      </li>
      <li className={Styles.header1}>
        <Link href="/about" >
          <a>About</a>
        </Link>
      </li>
      <li className={Styles.header1}>
        <Link href="/events" >
          <a>Events</a>
        </Link>
      </li>
      <li className={Styles.header2}>
        <h3 className={Styles.titleCard}>PlayGroup</h3>
      </li>
    </ul>
  </header>
)

export default Header