import {
  faTachometerAlt,
  faCog,
  faChartArea,
  faBookReader,
} from '@fortawesome/free-solid-svg-icons';

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
        { lable: 'React Datepicker', value: '/componets/react-datepicker' },
        { lable: 'Toast', value: '/componets/toast' },
        { lable: 'Table', value: '/componets/custom-table' },
        { lable: 'Map', value: '/componets/map' },
      ],
    },
    {
      id: '3',
      lable: 'Charts',
      value: '/charts',
      icon: faChartArea,
      hasSubMenu: true,
      subMenuOptions: [{ lable: 'Bar Chart', value: '/charts/bar-chart' }],
    },
    {
      id: '4',
      lable: 'File Reader',
      value: '/reader',
      icon: faBookReader,
      hasSubMenu: true,
      subMenuOptions: [
        { lable: 'Excel Read', value: '/reader/excel-read' },
        { lable: 'React CSV Reader', value: '/reader/react-csv-reader' },
      ],
    },
  ];
};
export default getMenuOptions;
