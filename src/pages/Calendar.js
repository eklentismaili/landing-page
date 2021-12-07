import Calend, { CalendarView } from 'calend'; // import component


const Calendar = () => {
    return (
        <div className="calendar pages">
            <section className="calendar-app py-5">
 <div className="container py-5">
     <div className="row">
         <h1 className="text-color-blue text-center pb-5">Our Incoming Trips</h1>
        <div className="col calendar-comp">
        
        <Calend
      events={[]}
      initialDate={new Date().toISOString()}
      hourHeight={60}
      initialView={CalendarView.MONTH}
      disabledViews={[CalendarView.DAY]}
    />
        
        </div>
     </div>
 </div>
            </section>
        </div>
    )
}

export default Calendar
