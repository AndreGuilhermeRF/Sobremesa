'use client'
import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se as senhas coincidem
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setError('');
    // Lógica de cadastro (API, etc.)
    console.log('Formulário enviado:', formData);
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirmar Senha:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" style={buttonStyle}>Cadastrar</button>
      </form>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  marginTop: '10px'
};

export default SignUpForm;
