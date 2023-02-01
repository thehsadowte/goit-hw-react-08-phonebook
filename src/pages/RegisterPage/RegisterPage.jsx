import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <section>
      <div>
        <h1>Register Page</h1>
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
