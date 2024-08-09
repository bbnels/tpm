import Link from 'next/link';
import Layout from '../../components/Layout';

export default function DataMaintenanceIndex() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Data Maintenance</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/data-maintenance/curriculum">
          <a className="block p-6 bg-white rounded-lg shadow-md hover:bg-blue-50">
            <h2 className="text-xl font-semibold mb-2">Manage Curriculum</h2>
            <p className="text-gray-600">Create, update, or delete curriculum data.</p>
          </a>
        </Link>

        <Link href="/data-maintenance/questions">
          <a className="block p-6 bg-white rounded-lg shadow-md hover:bg-blue-50">
            <h2 className="text-xl font-semibold mb-2">Manage Test Questions</h2>
            <p className="text-gray-600">Create, update, or delete test questions.</p>
          </a>
        </Link>

        <Link href="/data-maintenance/papers">
          <a className="block p-6 bg-white rounded-lg shadow-md hover:bg-blue-50">
            <h2 className="text-xl font-semibold mb-2">Manage Test Papers</h2>
            <p className="text-gray-600">Create, update, or delete test papers.</p>
          </a>
        </Link>

        <Link href="/data-maintenance/exams">
          <a className="block p-6 bg-white rounded-lg shadow-md hover:bg-blue-50">
            <h2 className="text-xl font-semibold mb-2">Manage Exams</h2>
            <p className="text-gray-600">Create, update, or delete exam data.</p>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
