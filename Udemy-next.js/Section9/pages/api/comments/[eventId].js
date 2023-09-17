function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    console.log(email, name, text);

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);


    res.status(201).json({ message: "Added ne comment" , comment: newComment});
  }

  if (req.method === "GET") {
    const dummyList = [
        {id: 'c1', name:"max", text: " A first comment"}
    ]

    res.status(200).json({message: dummyList});
  }
}

export default handler;
