import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Santos',
          slug: 'santos',
          location: {
            latitude: -23.9618,
            longitude: -46.3322
          }
        }
      ]}
    />
  )
}
