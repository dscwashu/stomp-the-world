import { TitleHome } from '@/Components/TitleHome/TitleHome'
import { Vision } from '@/Components/Vision/Vision'
import { Overview } from '@/Components/OverviewHome/Overview'
import { MissionHome } from '@/Components/MissionHome/MissionHome'
import { Mission2 } from '@/Components/Mission2/Mission2'
import { Flex } from '@mantine/core'

export default function Page() {
  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
      <TitleHome />
      <Overview />
      <MissionHome />
      <Vision />
      <Mission2 />
    </Flex>
  )
}
