import Loader from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectAuthLoading } from 'redux/auth/selectors';
import { Box, Container, Flex, Spacer } from '@chakra-ui/react';
import css from './Layout.module.css';
import { Suspense } from 'react';

const routes = [
  {
    label: 'REGISTER',
    path: '/register',
    privatePath: false,
  },
  {
    label: 'LOGIN',
    path: '/login',
    privatePath: false,
  },
  {
    label: 'CONTACTS',
    path: '/contacts',
    privatePath: true,
  },
];

const Layout = () => {
  const authLoading = useSelector(selectAuthLoading);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Box
      w="100%"
      minH="630px"
      bgGradient="linear-gradient(#188da4 0%, #098ea5 25%, #0abdca 50%)"
    >
      <Container maxW="container.sm" pt="20px">
        <Flex flexDirection="column">
          <header>
            <div>
              <nav>
                <ul>
                  <Flex>
                    <li className={css.linkItem}>
                      <NavLink to="/">HOME</NavLink>
                    </li>
                    <Spacer />
                    {routes.map(({ label, path, privatePath }) => {
                      return privatePath === isLoggedIn ? (
                        <li key={path} className={css.linkItem}>
                          <NavLink className={css.linkItem} to={path}>
                            {label}
                          </NavLink>
                        </li>
                      ) : null;
                    })}
                  </Flex>
                </ul>
              </nav>
            </div>
            {isLoggedIn && <UserMenu />}
          </header>

          <main>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </main>

          {authLoading && <Loader />}
        </Flex>
      </Container>
    </Box>
  );
};

export default Layout;
