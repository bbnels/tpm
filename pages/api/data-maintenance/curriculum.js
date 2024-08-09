let curriculums = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(curriculums);
  } else if (req.method === 'POST') {
    const curriculum = { id: Date.now(), ...req.body };
    curriculums.push(curriculum);
    res.status(201).json(curriculum);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    curriculums = curriculums.filter((curriculum) => curriculum.id !== parseInt(id));
    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
