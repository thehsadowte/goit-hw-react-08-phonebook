import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
    navigate('/contacts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Input
          p="5"
          borderColor="teal"
          _placeholder={{ opacity: 1, color: 'gray.500', textAlign: 'center' }}
          focusBorderColor="teal"
          variant="flushed"
          mt="50px"
          placeholder="Write your email"
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        {/* <span>password</span> */}
        <Input
          p="5"
          layerStyle="input"
          borderColor="teal"
          _placeholder={{ opacity: 1, color: 'gray.500', textAlign: 'center' }}
          variant="flushed"
          focusBorderColor="teal"
          mt="10px"
          placeholder="Write your password"
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          minLength={8}
        />
      </label>
      <button type="submit" className={css.logBtn}>
        LOG IN
      </button>
    </form>
  );
};

export default LoginForm;
