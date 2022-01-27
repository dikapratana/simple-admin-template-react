import pages from '../pages';

const MainMenu = [
  {
    label: 'Home',
    component: pages.Home,
    path: '/',
    exact: true
  },
  {
    label: 'Galerry',
    component: pages.Gallery,
    path: '/galerry',
    exact: true
  },
  {
    label: 'Logout',
    component: pages.Logout,
    path: '/logout'
  }
];

export default MainMenu;
