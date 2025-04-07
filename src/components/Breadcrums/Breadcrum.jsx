import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrum.css';
import arrow_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png';

const Breadcrumb = ({ product }) => {
  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> 
      {product?.category || 'Category'} <img src={arrow_icon} alt="arrow" /> {product?.name || 'Product'}
    </div>
  );
};

Breadcrumb.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Breadcrumb;
