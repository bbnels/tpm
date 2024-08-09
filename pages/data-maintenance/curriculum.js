import { useState, useEffect } from 'react';
import Form from '../../components/Form';
import Table from '../../components/Table';
import Layout from '../../components/Layout';

export default function Curriculum() {
  const [curriculums, setCurriculums] = useState([]);
  
  useEffect(() => {
    fetch('/api/data-maintenance/curriculum')
      .then((res) => res.json())
      .then((data) => setCurriculums(data));
  }, []);
  
  const addCurriculum = (curriculum) => {
    fetch('/api/data-maintenance/curriculum', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(curriculum),
    })
    .then((res) => res.json())
    .then((newCurriculum) => setCurriculums([...curriculums, newCurriculum]));
  };

  const deleteCurriculum = (id) => {
    fetch(`/api/data-maintenance/curriculum/${id}`, { method: 'DELETE' })
      .then(() => setCurriculums(curriculums.filter((curriculum) => curriculum.id !== id)));
  };

  return (
    <Layout>
      <h2 className="text-xl mb-4">Manage Curriculum</h2>
      <Form 
        fields={[{ label: 'Name', name: 'name', type: 'text' }]}
        onSubmit={addCurriculum}
      />
      <Table 
        headers={['name']}
        data={curriculums}
        onDelete={deleteCurriculum}
      />
    </Layout>
  );
}
