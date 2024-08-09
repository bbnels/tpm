let exams = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(exams);
  } else if (req.method === 'POST') {
    const exam = { id: Date.now(), ...req.body };
    exams.push(exam);
    res.status(201).json(exam);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    exams = exams.filter((exam) => exam.id !== parseInt(id));
    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
