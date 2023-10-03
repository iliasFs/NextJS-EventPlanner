import React from "react";
import Link from "next/link";
import classes from "./EventItem.module.css";
import Button from "../UI/Button";
import DateIcon from "../icons/dateIcon";
import AddressIcon from "../icons/addressIcons";
import ArrowRightIcon from "../icons/arrowRightIcon";
//Optimize images
import Image from "next/image";

const EventItem = ({ event }) => {
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formmattedAddress = event.location.replace(", ", "\n");

  const exploreLink = `/events/${event.id}`;

  return (
    <li className={classes.item}>
      <Image
        src={"/" + event.image}
        alt={event.title}
        width={340}
        height={160}
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formmattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
