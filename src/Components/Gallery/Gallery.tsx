'use client'

import { List, Flex } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { SingleGallery } from '../SingleGallery/SingleGallery'

export function Gallery() {
  return (
    <Flex align={'center'} justify={'center'} direction={'column'}>
      <SingleGallery
        urls={[
          'https://stomptheworld.org/resources/TE_Mitzvah/TE%20Community%20Service%204.JPG',
          'https://stomptheworld.org/resources/TE_Mitzvah/TE%20Community%20Service%206.JPG',
        ]}
      />
    </Flex>
  )
}

{
  /* <h1>Stomping through the Years</h1>
<h1>Emanuel Confirmation Class Mitzvah (Service) Project</h1>
<h1>Premier Charter School After School Program</h1>
<h1>Mardi Gras 2022 (Thank you to our volunteers)</h1>
<h1>Mural Painting with CommUNITY Arts, Whole Arts and M Gray Art</h1>
<h1>Stomp the World's Chill Zone (Safe place for teens to hang out)</h1>
<h1>Mr. Cohen's 5th Grade Class Graduation </h1>
<h1>Stomp the Canvas Fundraiser</h1>
<h1>Adopt a Family for the Holidays (We adopted three families)!!</h1>
<h1>Field Trip to see the play Ghost</h1>
<h1>Mardi Gras 2020</h1>
<h1>Stomp the World Open House/Holiday Party </h1>
<h1>Team Building</h1>
<h1>Back to School Splash</h1>
<h1>Trivia Night 2019</h1>
<h1>Stomping through the Afternoon After School Club</h1>
<h1>Field Trip to Cardinals Game 2019</h1>
<h1>University of Missouri Columbia College Visit</h1>
<h1>Mardi Gras 2019</h1>
<h1>City Museum</h1>
<h1>Educational Experience to Memphis, TN</h1>
<h1>Trivia Night 2018</h1>
<h1>Field Trip to Cardinals Game 2018</h1>
<h1>Field Trip to Imo's and Six Flags</h1>
<h1>Field Trip to See the Movie Wonder</h1>
<h1>Field Trip to St. Louis Science Center</h1>
<h1>Field Trip to See the Movie Selma</h1>
<h1>Trivia Night </h1>
<h1>T-Shirt Photo Contest</h1>
<h1>Flash Mob for a Cause</h1> */
}
