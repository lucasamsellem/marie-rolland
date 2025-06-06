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
    <form onSubmit={handleSubmit} className='contact-form'>
      <input
        type='text'
        id='name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        className='contact-form-input'
        placeholder='Nom'
      />
      <input
        type='email'
        id='email'
        name='email'
        required
        value={formData.email}
        onChange={handleChange}
        className='contact-form-input'
        placeholder='Email'
      />
      <textarea
        id='message'
        name='message'
        required
        rows='4'
        value={formData.message}
        onChange={handleChange}
        placeholder='Message'
      />

      {error && <p className='text-red-500 mb-2'>{error}</p>}
      {submitted && <p className='text-green-500 mb-2'>Merci pour ton message !</p>}

      <button
        type='submit'
        className='bg-marie-gold w-full font-semibold py-2 text-lg text-white rounded-[10px] hover:opacity-80 transition-all'
      >
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
