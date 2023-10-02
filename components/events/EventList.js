import React, { useLayoutEffect } from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem event={event} key={event.id} />
      ))}
    </ul>
  );
};

export default EventList;
