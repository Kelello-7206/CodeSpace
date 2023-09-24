

function handler(req, res) {
  const { email, name, message } = req.body;

  if (!email ||
      !email.includes('@') ||
      !name ||
      !name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(402).json({message: 'Invalid input'})
      return;
  }

  const newMessage = {
    email,
    name,
    message,
  };

  console.log(newMessage)

  res.status(201).json({message: 'Success stored message' , message: newMessage})

}

export default handler