import { faTachometerAlt, faCog } from '@fortawesome/free-solid-svg-icons';

const getMenuOptions = () => {
  return [
    {
      id: '1',
      lable: 'Home',
      value: '/',
      hasSubMenu: false,
      icon: faTachometerAlt,
    },
    {
      id: '2',
      lable: 'Components',
      value: '/componets',
      icon: faCog,
      hasSubMenu: true,
      subMenuOptions: [
        { lable: 'Form', value: '/form' },
        { lable: 'Breadcrumbs', value: '/breadcrumbs' },
      ],
    },
  ];
};
export default getMenuOptions;
