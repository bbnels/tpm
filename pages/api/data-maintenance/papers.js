let papers = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(papers);
  } else if (req.method === 'POST') {
    const paper = { id: Date.now(), ...req.body };
    papers.push(paper);
    res.status(201).json(paper);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    papers = papers.filter((paper) => paper.id !== parseInt(id));
    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
