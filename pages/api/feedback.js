function handler(req, res) {
  res.status(200).json({ serverRunning: "Correct" });
}

export default handler;
