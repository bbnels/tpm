import { useState, useEffect } from 'react';
import Form from '../../components/Form';
import Table from '../../components/Table';
import Layout from '../../components/Layout';

export default function Curriculum() {
  const [papers, setPapers] = useState([]);
  
  useEffect(() => {
    fetch('/api/data-maintenance/paper')
      .then((res) => res.json())
      .then((data) => setPapers(data));
  }, []);
  
  const addPaper = (paper) => {
    fetch('/api/data-maintenance/paper', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paper),
    })
    .then((res) => res.json())
    .then((newPaper) => setPapers([...papers, newpaper]));
  };

  const deletePaper = (id) => {
    fetch(`/api/data-maintenance/papers/${id}`, { method: 'DELETE' })
      .then(() => setPapers(papers.filter((paper) => paper.id !== id)));
  };

  return (
    <Layout>
      <h2 className="text-xl mb-4">Manage Papers</h2>
      <Form 
        fields={[{ label: 'Name', name: 'name', type: 'text' }]}
        onSubmit={addPaper}
      />
      <Table 
        headers={['name']}
        data={papers}
        onDelete={deletePaper}
      />
    </Layout>
  );
}
