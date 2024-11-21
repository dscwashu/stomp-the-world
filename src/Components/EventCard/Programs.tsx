'use client'

import Link from 'next/link'
import styles from './EventCard.module.css'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'

interface EventDetails {
  eventName: string
  eventContent: string
  eventContent2: string
  eventImage: string
}

export default function Program({
  eventName,
  eventContent,
  eventContent2,
  eventImage,
}: EventDetails) {
  return (
    <>
      <Card shadow='sm' padding='lg' radius='md' className={styles.card}>
        <Card.Section>
          <Image src={eventImage} height={260} alt='Program' />
        </Card.Section>

        <Group justify='space-between' mt='md' mb='xs'>
          <Text className={styles.header} fw={500}>{eventName}</Text>
          <Badge color='pink'>Contact us to sign up!</Badge>
        </Group>

        <Text className={styles.text} size='m'>
          {eventContent}
        </Text>
        <br></br>
        <Text className={styles.text} size='m'>
          {eventContent2}
        </Text>
        
      </Card>
    </>
  )
}
