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
      lable: 'Form Controls',
      value: '/inputs',
      icon: faCog,
      hasSubMenu: true,
      subMenuOptions: [
        { lable: 'Input1', value: '/inputs' },
        { lable: 'Input2', value: '/input2' },
      ],
    },
  ];
};
export default getMenuOptions;
