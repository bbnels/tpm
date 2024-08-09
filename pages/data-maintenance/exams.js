import { useState, useEffect } from 'react';
import Form from '../../components/Form';
import Table from '../../components/Table';
import Layout from '../../components/Layout';

export default function Exams() {
  const [exams, setExams] = useState([]);

  // Fetching exams data on component mount
  useEffect(() => {
    fetch('/api/data-maintenance/exams')
      .then((res) => res.json())
      .then((data) => setExams(data));
  }, []);

  // Function to add a new exam
  const addExam = (exam) => {
    fetch('/api/data-maintenance/exams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(exam),
    })
    .then((res) => res.json())
    .then((newExam) => setExams([...exams, newExam]));  // corrected typo from `Exams` to `exams`
  };

  // Function to delete an exam by ID
  const deleteExam = (id) => {
    fetch(`/api/data-maintenance/exam/${id}`, { method: 'DELETE' })
      .then(() => setExams(exams.filter((exam) => exam.id !== id)));
  };

  return (
    <Layout>
      <h2 className="text-xl mb-4">Manage Exams</h2>
      <Form 
        fields={[{ label: 'Name', name: 'name', type: 'text' }]}
        onSubmit={addExam}
      />
      <Table 
        headers={['name']}
        data={exams}
        onDelete={deleteExam}  
      />
    </Layout>
  );
}
