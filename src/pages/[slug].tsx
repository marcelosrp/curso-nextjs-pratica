import client from 'graphql/client'
import { GetPagesQuery, GetPageBySlugQuery } from 'graphql/generated/graphql'
import { GET_PAGES, GET_PAGES_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // retorna um loading ou qualquer cois enquanto tá sendo criado
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGES_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

// getStaticPaths => serve para gerar as urls em build time (/about, /trip/santos)]
// getStaticProps => serve para buscar dados da página (props) - build time - estático
// getServerSideProps => serve para buscr dados da página (props) - runtime - toda requisição (bundle fica no server)
// getInitialProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle tambem vem para o client) - hydrate
