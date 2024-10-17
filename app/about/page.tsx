import { Overview } from '@/Components/OverviewHome/Overview'
import { About1, About2, About3, About4 } from '@/Components/About/About'
import { Staff } from '@/Components/About/Staff'
import ContactUs from '@/Components/ContactUs/ContactUs'
import type { MantineThemeOverride } from '@mantine/core'

export default function Page() {
  return (
    <div>
      <About1 />
      <About2 />
      <About4 />
      <Staff />
    </div>
  )
}
