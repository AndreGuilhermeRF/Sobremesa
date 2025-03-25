'use client'
import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    console.log('Dados do login:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleChange}
        required
        autoFocus
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={formData.senha}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
      <br />
      <hr />
      <p>Ou</p>
      <button type="button">Registrar</button>
    </form>
  );
};

// Apenas uma exportação default deve ser feita, assim:
export default LoginForm;
