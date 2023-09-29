// There is no conflict with the [eventId] page because we have to use more than one dynamic parameter
//for example we take a specific date from a filter
import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p>Page cannot be displayed</p>;
  }

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
    return <p>Invalid Filter. Enter new values</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No filters found for the specific event</p>;
  }
  return (
    <div>
      <EventList events={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
