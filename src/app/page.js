import { createClient } from '@/prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'

import variables from '@/styles/variables.module.scss'

const queryHomepage = () => {
  const client = createClient()
  return client.getSingle('homepage')
}

export async function generateMetadata() {
  const page = await queryHomepage()

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    images: page.data.meta_image,
  }
}

export default async function Home() {
  const page = await queryHomepage()
  return (
    <main id="root" className={variables.main}>
      <SliceZone slices={page.data.slices} components={components}/>
    </main>
  )
}
