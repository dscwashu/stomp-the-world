import { Carousel } from '@mantine/carousel'
import Image from 'next/image'
import '@mantine/carousel/styles.css'

export function SingleGallery({ urls }: { urls: string[] }) {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align='start'>
      {urls.map((url, i) => (
        <Carousel.Slide key={i}>
          <Image src={url} alt='' height={300} width={400} />
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}
