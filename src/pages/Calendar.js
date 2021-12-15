import SingleLine from "../components/SingleLine";
import Calend, { CalendarView } from "calend"; // import component

const Calendar = () => {
  return (
    <div className="calendar pages">
      <section className="calendar-app py-5">
        <div className="container py-5">
          <div className="row">
            <h1 className="text-color-blue text-center" data-aos="fade-up">
              Our Incoming Trips
            </h1>
            <SingleLine></SingleLine>
            <div className="col calendar-comp pt-5" data-aos="fade-up">
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
  );
};

export default Calendar;
