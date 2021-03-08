import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'


export default function useUser({
  redirectTo = false,
  redirectIfFound = false,
} = {}) {
  // make a data object from user when mutateUser is called 
  // the data for the data object is taken from /api/user 
  const { data: user, mutate: mutateUser } = useSWR('/api/user')

  // on the calling of mutateUser, useEffect is called and we determine if we are redirected
  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo)
    }
  }, [user, redirectIfFound, redirectTo])

  return { user, mutateUser }
}
