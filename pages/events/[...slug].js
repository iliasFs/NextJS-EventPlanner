// There is no conflict with the [eventId] page because we have to use more than one dynamic parameter
//for example we take a specific date from a filter
import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-utli";
import EventList from "@/components/events/EventList";

const FilteredEventsPage = (props) => {
  const router = useRouter();

  // const filteredData = router.query.slug;
  // if (!filteredData) {
  //   return <p>Page cannot be displayed</p>;
  // }

  // const filteredYear = filteredData[0];
  // const filteredMonth = filteredData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if (props.hasError) {
    return <p>Invalid Filter. Enter new values</p>;
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No results found for the specific event</p>;
  }

  const date = new Date(props.date.year, props.date.month - 1);
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasErrror: true,
      },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: { events: filteredEvents, date: { year: numYear, month: numMonth } },
  };
}

export default FilteredEventsPage;
