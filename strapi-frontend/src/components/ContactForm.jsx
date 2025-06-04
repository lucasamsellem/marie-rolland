import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple
    if (!formData.email || !formData.message) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Soumettre le formulaire (ex. requête API)
    console.log('Données envoyées:', formData);

    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setSubmitted(true);
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-white shadow-md rounded'>
      <h2 className='text-2xl font-bold mb-4'>Contacte-moi</h2>

      <div className='mb-4'>
        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
          Nom :
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
          Email * :
        </label>
        <input
          type='email'
          id='email'
          name='email'
          required
          value={formData.email}
          onChange={handleChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
          Message * :
        </label>
        <textarea
          id='message'
          name='message'
          required
          rows='4'
          value={formData.message}
          onChange={handleChange}
          className='mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500'
        />
      </div>

      {error && <p className='text-red-500 mb-2'>{error}</p>}
      {submitted && <p className='text-green-500 mb-2'>Merci pour ton message !</p>}

      <button
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors'
      >
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
