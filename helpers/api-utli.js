//get all events

export async function getAllEvents() {
  const response = await fetch(
    "https://events-handler-c18a8-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );

  const data = await response.json();
  const events = [];

  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }

  return events;
}

//function to give me featured events.

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

//function to get a specific event by id
export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
