'use client'

import styles from './About.module.css'
import { List } from '@mantine/core'

export function About1() {
  return (
    <div className='About-block'>
      <h1>Movement</h1>
      <h3> Classes for early childhood learning centers. </h3>
      <List>
        <List.Item>Flance Early Learning Center</List.Item>
        <List.Item>Cornerstone Center for Early Learning</List.Item>
        <List.Item>Shirlee Green Preschool</List.Item>
        <List.Item>
          Little Sunshine Playhouse & Preschool (University City, Chesterfield,
          and Creve Coeur)
        </List.Item>
        <List.Item>Southside Early Learning Center</List.Item>
        <List.Item>All 16 Centers under STAR Inc.</List.Item>
      </List>
    </div>
  )
}

export function About2() {
  return (
    <div className='About-block'>
      <h1>Tutoring</h1>
      Affordable in person/online tutoring and homework help. Through tutoring,
      movement, after school programming, and our experiences outside the
      classroom, we have been able to serve and impact over 1,000 children in
      the greater St. Louis area.
    </div>
  )
}

export function About3() {
  return (
    <div className='About-block'>
      <h1>Contact Us</h1>
      <List>
        <List.Item>Name:</List.Item>
        <List.Item>Email:</List.Item>
        <List.Item>Phone Number:</List.Item>
        <List.Item>Message:</List.Item>
      </List>
    </div>
  )
}

export function About4() {
  return (
    <div className='About-block'>
      <h1>After School Programming</h1>
      <List>
        <List.Item>Highland Elementary 5th grade class</List.Item>
        <List.Item>Premier Charter School 3rd - 8th graders</List.Item>
        <List.Item>Stomp the World Academy (4-8 graders)</List.Item>
      </List>
      <h3>
        {' '}
        Through tutoring, movement, after school programming, and our
        experiences outside the classroom, we have been able to serve and impact
        over 1,000 children in the greater St. Louis area.{' '}
      </h3>
    </div>
  )
}
