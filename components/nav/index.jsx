import Link from 'next/link'
import Container from '../container'
import ButtonLink from '../button-link'

export default function Nav({ title = 'Entries' }) {
  return (
    <Container className="py-4">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
          <ButtonLink href="/new">New Entry</ButtonLink>
        </div>
      </nav>
    </Container>
  )
}
