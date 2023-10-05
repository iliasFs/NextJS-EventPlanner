function handler(req, res) {
  const dummyList = [
    { id: "c1", name: "Max", text: "first comment" },
    { id: "c2", name: "Julia", text: "Second comment" },
    { id: "c3", name: "George", text: "Third comment" },
  ];
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    //add server-side validation

    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      return;
    }

    console.log(email, name, text);

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    dummyList.push(newComment);
    console.log(dummyList);
    res.status(201).json({ message: "added comment", comment: newComment });
  }

  if (req.method === "GET") {
    res.status(201).json({ comments: dummyList });
  }
}

export default handler;
