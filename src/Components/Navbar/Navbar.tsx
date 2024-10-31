'use client'

import { useState } from 'react'
import { Container, Group, Burger, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './Navbar.module.css'
import { useRouter } from 'next/navigation'

const pages = [
  {
    label: 'Home',
    link: '/home',
  },
  {
    label: 'Programs and Events',
    link: '/programs',
  },
  {
    label: 'Gallery',
    link: '/gallery',
  },
  {
    label: 'About Us',
    link: '/about',
  },
]

export default function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(pages[0].link)

  const router = useRouter()

  const items = pages.map((page) => (
    <a
      key={page.label}
      href={page.link}
      className={classes.link}
      data-active={active === page.link || undefined}
      onClick={(event) => {
        event.preventDefault()
        setActive(page.link)
        router.push(page.link)
      }}>
      {page.label}
    </a>
  ))

  return (
    
    <header className={classes.header}>
        <Flex direction='row' justify='flex-start' align='fl'>
        <Container size='md' className={classes.inner}>
          <Group gap={5} visibleFrom='xs'>
          <h1 className={classes.logotext}>Stomp the World</h1>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom='xs' size='sm' />
        </Container>
        </Flex>
      </header>
  )
}
