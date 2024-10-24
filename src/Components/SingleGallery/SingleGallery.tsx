import { Carousel } from '@mantine/carousel'
import Image from 'next/image'
import '@mantine/carousel/styles.css'
import styles from './SingleGallery.module.css'

export function SingleGallery({ urls }: { urls: string[] }) {
  return (
    <Carousel
      withIndicators
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      align='start'>
      {urls.map((url, i) => (
        <Carousel.Slide key={i} className={styles.singleGallery}>
          <Image
            alt=''
            src={url}
            width={200}
            height={200}
            style={{ objectFit: 'contain' }}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}
