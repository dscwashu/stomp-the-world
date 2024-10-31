import { TitleHome } from '@/Components/TitleHome/TitleHome'
import { Vision } from '@/Components/Vision/Vision'
import { Overview } from '@/Components/OverviewHome/Overview'
import { MissionHome } from '@/Components/MissionHome/MissionHome'
import { Flex } from '@mantine/core'

export default function Page() {
  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
      <TitleHome />
      <Overview />
      <MissionHome />
      <Vision />
    </Flex>
  )
}
