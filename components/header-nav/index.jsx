import Link from 'next/link'
import Styles from './index.module.css'
import useUser from '../../lib/useUser'
import React from 'react'
import { useRouter } from 'next/router'
import fetchJson from '../../lib/fetchJson'


export default function Header() {
  /** Basic description of how scoping of pages with authentication works:
   * 
   * - Set 'redirectTo:' to what page you want the user to be directed to upon landing on the site
   * - The server will direct the user to this page when they type in the url to the site
   * - The user can access other pages on the site through buttons or links or if they are
   *  routed there by the server.
   * - Because clicking buttons or links is the main way to navigate the site, this should not
   *  be an issue. 
   */
  const { user, mutateUser } = useUser({ redirectTo: '/loginPage' })
  const router = useRouter()



  if (!user || user.isLoggedIn === false) {
    return (
      <header>
        <ul className={Styles.ul}>
          <li className={Styles.header1}>
            <Link href="/loginPage">
              <a>Login</a>
            </Link>
          </li>
          <li className={Styles.header1}>
            <Link href="/new-user">
              <a>Create Account</a>
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
            <a
              href="/api/logout"
              onClick={async (e) => {
                e.preventDefault()
                await mutateUser(fetchJson('/api/logout'))
                router.push('/loginPage')
              }}
            >Logout</a>

          </li>
          <li className={Styles.header1}>
            <Link href="/findgroups">
              <a>Find Groups</a>
            </Link>
          </li>
          <li className={Styles.header1}>
            <Link href="/settings">
              <a>Settings</a>
            </Link>
          </li>
          <li className={Styles.header1}>
            <Link href="/profile" >
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




