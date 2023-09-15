
function handler() {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() ||
      !text ||
      text.trim() === ""
    ) {
      resizeBy.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      id: new Date().toDateString,
      email,
      name, 
      text,
    };

    console.log(newComment);

    res.status(201).json({ message: "Added new comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList =[
        {id: 'c1', name: 'Max', text: 'First comment'},
        {id: 'c2', name: 'Manuel', text: 'Second comment'}
    ]

    res.status(200).json({ comment: dummyList });

  }
}

export default handler;
