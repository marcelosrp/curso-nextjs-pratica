import LinkWraper from 'components/LinkWrapper'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://my-trips-soares.vercel.app/"
        openGraph={{
          url: 'https://my-trips-soares.vercel.app/',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips-soares.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWraper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWraper>
      <Map places={places} />
    </>
  )
}
