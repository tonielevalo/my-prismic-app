import { createClient } from '@/prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'

import variables from '@/styles/variables.module.scss'
import Accordion from '@/components/AccordionWhitImage'

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

const items = [
  { title: 'Item 1', content: 'Content for item 1' },
  { title: 'Item 2', content: 'Content for item 2' },
  // ... more items
];

export default async function Home() {
  const page = await queryHomepage()
  return (
    <main id="root" className={variables.main}>
      <SliceZone slices={page.data.slices} components={components}/>
    </main>
  )
}
