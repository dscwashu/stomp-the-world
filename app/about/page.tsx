import { Overview } from '@/Components/OverviewHome/Overview'
import { About1, About2, About3 } from '@/Components/About/About'
import ContactUs from '@/Components/ContactUs/ContactUs'

export default function Page() {
  return (
    <div>
      <About1 />
      <About2 />
      <ContactUs />
      {/* <Staff /> */}
    </div>
  )
}
