import EventCard from '@/Components/EventCard/EventCard'
import Program from '@/Components/EventCard/Programs'
import styles from "@/Components/EventCard/EventCard.module.css"

export default function Page() {
  return (
    <div className={styles.page}>
      <EventCard
        eventContent="Stomp the World Academy is an after school program, Monday - Friday (beginning when we have 20 students signed up) and following the St. Louis City Public Schools Calendar from 3pm - 6pm. This program is open to students in K - 8. Your child can expect a snack, activities (both hands on and moving), choice time, chill time, homework help, mentoring, occasional visits from outside presenters, and a few field trips during the year. Most importantly we aim to provide a safe space and community for children to be a part of after school. Registration is not complete until the $25 (non-refundable) fee is paid. Break Down of program costs: One day $15, One Week $60, One Month $200. You choose in advance if you're paying by the day, week, or month. Payment due in advance of student attending, Some scholarships are available on a case by case basis. Contact Mark at mark@stomptheworld.org for questions. Payment can be made by check, cash, Venmo/CashApp, or clicking the donate button on our website www.stomptheworld.org.  If transportation is needed from school to Stomp the World, please let us know, we are working to transport students from school to our location (if your child attends Gateway Science Academy (Kingshighway/Gravois) we will pick students up and walk to our location next to Taco Bell). '"
        eventName='After School Program'
        eventLink='https://docs.google.com/forms/d/e/1FAIpQLScwg6wrpXngDf-6iDDMAidq-JSAgn_RKKNFpy4ADuzv1g9tVQ/viewform?usp=pp_url'
        eventImage='/after_school_program.jpg'
      />

      <Program
        eventContent="Stomp the World is Offering Early Childhood movement classes!!!!"
        eventContent2="Contact Mr. Kevin (klee@stomptheworld.org) or Mark Cohen (mark@stomptheworld.org) to get your Early Learning Center kids moving today. Or call us at 314-325-2934."
        eventName='Moving with Mr Kevin'
        eventImage='/movement.png'
      />
    </div>
  )
}
