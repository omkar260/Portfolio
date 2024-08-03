import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ isSending: false, responseMessage: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ isSending: true, responseMessage: '' });

    try {
      const response = await fetch('https://formspree.io/f/xnnadlkb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus({ isSending: false, responseMessage: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
        window.scrollTo(0, 0); // Scroll to the top of the page
      } else {
        throw new Error('Error sending message');
      }
    } catch (error) {
      setStatus({ isSending: false, responseMessage: 'Error sending message. Please try again.' });
    }
  };

  const formFields = [
    { id: 'name', type: 'text', label: 'Name', value: formData.name },
    { id: 'email', type: 'email', label: 'Email', value: formData.email },
    { id: 'message', type: 'textarea', label: 'Message', value: formData.message, rows: 4 },
  ];

  return (
    <div className='w-full mx-auto p-10  text-white rounded-lg'>
      <form onSubmit={handleSubmit} className="space-y-10">
        {formFields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium">{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.id}
                value={field.value}
                onChange={handleChange}
                required
                rows={field.rows}
                className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              ></textarea>
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={field.value}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              />
            )}
          </div>
        ))}
        <div>
          <button
            type="submit"
            disabled={status.isSending}
            className="w-full px-4 py-2 text-voilet font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ligthGray focus:ring-offset-2 disabled:bg-gray border-2 border-white-500"
          >
            {status.isSending ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
      {status.responseMessage && <p className="mt-4 text-center text-sm">{status.responseMessage}</p>}
    </div>
  );
};

export default Contact;
