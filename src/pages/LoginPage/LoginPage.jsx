import { Center } from '@chakra-ui/react';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <section>
      <div>
        <Center textStyle="h2" mt="50px">
          Please log in
        </Center>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
