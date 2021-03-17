// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession } from 'next-iron-session'
/**
 * @param  {} handler - pass in a callback function that will get passed into withIronSession(handler, {})
 * 
 * @description
 * This makes your sessions stateless: you do not have to store session data on your server. 
 * You do not need another server or service to store session data. 
 * This is particularly useful in serverless architectures where you're trying 
 * to reduce your backend dependencies.
 */
export default function withSession(handler) {
  
  /**
   * @param password - used to encrypt the cookie
   * @param cookieName - the name of the cookie
   * @param ttl - in seconds, how long the cookie should stick around
   * @param cookieOptions - optional 
   */
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'Example_Cookie',
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      maxAge: 60,
      secure: process.env.NODE_ENV === 'production' ? true : false,
    },
  })
}
