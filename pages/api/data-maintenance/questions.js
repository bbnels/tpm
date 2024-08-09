let questions = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(questions);
  } else if (req.method === 'POST') {
    const question = { id: Date.now(), ...req.body };
    questions.push(question);
    res.status(201).json(question);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    questions = questions.filter((question) => question.id !== parseInt(id));
    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
