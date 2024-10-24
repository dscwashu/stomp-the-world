'use client'

import Link from 'next/link'
import styles from './EventCard.module.css'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'

interface EventDetails {
  eventName: string
  eventContent: string
  eventLink: string
  eventImage: string
}

export default function EventCard({
  eventName,
  eventContent,
  eventLink,
  eventImage,
}: EventDetails) {
  return (
    <>
      <Card shadow='sm' padding='lg' radius='md' className={styles.card}>
        <Card.Section>
          <Image src={eventImage} height={260} alt='Program' />
        </Card.Section>

        <Group justify='space-between' mt='md' mb='xs'>
          <Text fw={500}>{eventName}</Text>
          <Badge color='pink'>Sign up today!</Badge>
        </Group>

        <Text size='sm' c='dimmed'>
          {eventContent}
        </Text>
        <Link href={eventLink} target='_blank'>
          <Button color='green' fullWidth mt='md' radius='md'>
            Click here to sign up
          </Button>
        </Link>
      </Card>
    </>
  )
}
