import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const ReactHelmet = ({ title, description }) => {
  const baseTitle = 'Admin Panel';
  const fullTitle = title ? `${title} - ${baseTitle}` : baseTitle;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};

ReactHelmet.defaultProps = {
  description: 'Admin Panel',
  title: '',
};

ReactHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ReactHelmet;
