import LinkWraper from 'components/LinkWrapper'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWraper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWraper>
      <Map />
    </>
  )
}
