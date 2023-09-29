import addressIcon from "../icons/addressIcons";
import dateIcon from "../icons/dateIcon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  console.log(address);

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={dateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={addressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
