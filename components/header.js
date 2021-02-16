import Link from 'next/link'
import Styles from './index.module.css'

const Header = () => (
  <header>
    <ul className={Styles.ul}>
      <li className={Styles.header1}>
        <Link href="/"> 
        <a>Login</a>
        </Link>
      </li>
      <li className={Styles.header1}>
        <Link href="/feed">
          <a>Feed</a>
        </Link>
      </li>
      <li className={Styles.header1}>
        <Link href="/settings" as="/post/2020/first-post/with/catch/all/routes">
          <a>Settings</a>
        </Link>
      </li>
      <li className={Styles.header1}>
        <Link href="profile" as="/post/2020/second-post/with/catch/all/routes">
          <a>Profile</a>
        </Link>
      </li>
      <li className={Styles.header1}>
        <Link href="/groups" as="/post/2020/second-post/with/catch/all/routes">
          <a>My Groups</a>
        </Link>
      </li>
      <li className={Styles.header1}>
        <Link href="/about" >
          <a>About</a>
        </Link>
      </li>
      <li className={Styles.header2}>
            <h3 className={Styles.titleCard}>PlayGroups</h3>
      </li>
    </ul>
  </header>
)

export default Header