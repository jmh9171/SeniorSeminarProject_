import Link from 'next/link'
import Styles from './index.module.css'
import parseCookie from '../../lib/parseCookie'





export default function Header() {

  if (1) {
    return (
      <header>
        <ul className={Styles.ul}>
          <li className={Styles.header1}>
            <Link href="/loginPage">
              <a>Login</a>
            </Link>
          </li>
          <li className={Styles.header1}>
            <Link href="/about" >
              <a>About</a>
            </Link>
          </li>
          <li className={Styles.header2}>
            <h3 className={Styles.titleCard}>PlayGroup</h3>
          </li>
        </ul>
      </header>
    )
  } else {

    return (
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
            <Link href="/settings" as="/post/2020/first-post/with/catch/all/routes">
              <a>Settings</a>
            </Link>
          </li>
          <li className={Styles.header1}>
            <Link href="profile" >
              <a>Profile</a>
            </Link>
          </li>
          <li className={Styles.header1}>
            <Link href="/groups">
              <a>My Groups</a>
            </Link>
          </li>
          <li className={Styles.header1}>
            <Link href="/about" >
              <a>About</a>
            </Link>
          </li>
          <li className={Styles.header2}>
            <h3 className={Styles.titleCard}>PlayGroup</h3>
          </li>
        </ul>
      </header>
    )
  }
}




