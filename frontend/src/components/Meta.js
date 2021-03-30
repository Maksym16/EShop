import React from 'react';
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
     <Helmet>
        <title>{title}</title>
        <meta meta='description' content={description} />
        <meta meta='keywords' content={keywords} />
      </Helmet>
  );
}

Meta.defaultProps = {
  title: 'Welcome to E-shop | Home</title',
  description: 'We sell the best products for cheap',
  keywords: 'electronics, buy electronics, cheap electronics',
}
export default Meta;
