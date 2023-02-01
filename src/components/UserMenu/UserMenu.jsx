import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUserEmail, selectUserName } from 'redux/auth/selectors';

import { Box } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userEmail = useSelector(selectUserEmail);
  const userName = useSelector(selectUserName);

  const handleClick = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Box textStyle="p" mt="30px">
      <p>Hello, {userName}</p>

      <p>Your email: {userEmail}</p>
      <button type="button" onClick={handleClick}>
        LOG OUT
      </button>
    </Box>
  );
};

export default UserMenu;
