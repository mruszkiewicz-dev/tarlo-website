import Head from 'next/head'

const SITE_NAME = 'Tarlo'
const SITE_URL = 'https://www.tarlo.pl'
const DEFAULT_IMAGE = `${SITE_URL}/logo_black.png`

type SeoHeadProps = {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string
  schema?: Record<string, unknown> | Array<Record<string, unknown>>
}

export const SeoHead = ({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  keywords,
  schema,
}: SeoHeadProps) => {
  const canonical = `${SITE_URL}${path}`

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      {keywords ? <meta name='keywords' content={keywords} /> : null}
      <meta name='robots' content='index,follow,max-image-preview:large' />
      <link rel='canonical' href={canonical} />

      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:locale' content='pl_PL' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonical} />
      <meta property='og:image' content={image} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      {schema ? (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}
    </Head>
  )
}

