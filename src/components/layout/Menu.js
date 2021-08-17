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
        { lable: 'Form', value: '/componets/form' },
        { lable: 'Breadcrumbs', value: '/componets/breadcrumbs' },
        { lable: 'Buttons', value: '/componets/buttons' },
        { lable: 'React Select', value: '/componets/react-select' },
        { lable: 'Toast', value: '/componets/toast' },
        { lable: 'Table', value: '/componets/custom-table' },
      ],
    },
    {
      id: '3',
      lable: 'Charts',
      value: '/charts',
      icon: faCog,
      hasSubMenu: true,
      subMenuOptions: [
        { lable: 'Column Chart', value: '/charts/column-chart' },
      ],
    },
  ];
};
export default getMenuOptions;
