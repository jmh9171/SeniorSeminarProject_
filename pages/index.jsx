import Skeleton from 'react-loading-skeleton'

import Nav from '../components/nav'
import Container from '../components/container'

import { useEntries } from '../lib/swr-hooks'

import Header from '../components/header'

export default function IndexPage() {
  const { entries, isLoading } = useEntries()

  if (isLoading) {
    return (
      <div>
        <Nav />
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    )
  }

  return (
    <div>
      
      <Container>
        <h1>This is the index.js page</h1>
        
      </Container>
      
    </div>
  )
}

//<Entries entries={entries} />
