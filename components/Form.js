import { useState } from 'react';

export default function Form({ fields, onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        formErrors[field.name] = `${field.label} is required.`;
      }
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          formErrors[field.name] = 'Invalid email address.';
        }
      }
    });
    return formErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      {fields.map((field) => (
        <div className="mb-4" key={field.name}>
          <label className="block text-gray-700">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors[field.name] ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors[field.name] && (
            <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>
          )}
        </div>
      ))}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Save
      </button>
    </form>
  );
}
