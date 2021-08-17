import React, { useEffect, useState } from 'react';
import { getItemFromStorage } from '../../utils/helper';

const connectTheme = (Component) => (props) => {
  const selectedTheme = getItemFromStorage('data-theme') || 'light';
  const [theme, toggleTheme] = useState(selectedTheme);
  useEffect(() => {
    const themeToggler = document.getElementById('theme-toggle');
    const changeListener = () => {
      toggleTheme(getItemFromStorage('data-theme'));
    };
    if (themeToggler) themeToggler.addEventListener('change', changeListener);

    return () => {
      if (themeToggler)
        themeToggler.removeEventListener('change', changeListener);
    };
  }, []);

  return <Component {...props} theme={theme} />;
};
export default connectTheme;
