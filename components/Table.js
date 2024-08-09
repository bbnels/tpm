export default function Table({ headers, data, onDelete }) {
    return (
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-2">{header}</th>
            ))}
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {headers.map((header) => (
                <td key={header} className="border px-4 py-2">{row[header]}</td>
              ))}
              <td className="border px-4 py-2">
                <a href={`#edit`} className="text-blue-500">Edit</a>
                <button 
                  onClick={() => onDelete(row.id)} 
                  className="ml-4 text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  