//Static generation => We use getStaticProps

import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-utli";
import NewsletterRegistration from "@/components/input/newsletter-registration";

const HomePage = (props) => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;

//Firebase url : https://events-handler-c18a8-default-rtdb.europe-west1.firebasedatabase.app/
