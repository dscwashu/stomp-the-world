'use client'

import { Button, Flex, TextInput } from '@mantine/core'
import { useState } from 'react'
import React from 'react'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit() {
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Phone Number:', phoneNumber)
    console.log('Message :', message)
  }

  return (
    <Flex
      align={'center'}
      justify={'center'}
      direction={'row'}
      wrap={'wrap'}
      gap={'md'}
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
      }}>
      <TextInput
        label='Name'
        placeholder='Enter your name'
        onChange={(event) => setName(event.currentTarget.value)}
      />
      <TextInput
        label='Email'
        placeholder='Enter your email'
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <TextInput
        label='Phone Number'
        placeholder='Enter your phone number'
        onChange={(event) => setPhoneNumber(event.currentTarget.value)}
      />
      <TextInput
        label='Message'
        placeholder='Enter your message'
        onChange={(event) => setMessage(event.currentTarget.value)}
      />
      <Button onClick={handleSubmit} m={10}>
        Submit
      </Button>
    </Flex>
  )
}
