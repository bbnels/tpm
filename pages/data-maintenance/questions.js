import { useState, useEffect } from 'react';
import Form from '../../components/Form';
import Table from '../../components/Table';
import Layout from '../../components/Layout';

export default function Question() {
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    fetch('/api/data-maintenance/questions')
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);
  
  const addQuestion = (question) => {
    fetch('/api/data-maintenance/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(question),
    })
    .then((res) => res.json())
    .then((newquestion) => setQuestions([...questions, newquestion]));
  };

  const deleteQuestion = (id) => {
    fetch(`/api/data-maintenance/question/${id}`, { method: 'DELETE' })
      .then(() => setQuestions(questions.filter((question) => question.id !== id)));
  };

  return (
    <Layout>
      <h2 className="text-xl mb-4">Manage Questions</h2>
      <Form 
        fields={[{ label: 'Name', name: 'name', type: 'text' }]}
        onSubmit={addQuestion}
      />
      <Table 
        headers={['name']}
        data={questions}
        onDelete={deleteQuestion}
      />
    </Layout>
  );
}
