import React from 'react';
import './portfolio-unit.styles.scss';

const PortfolioUnit = ({ unit }) => {
    const { header, url, description } = unit;
    return (
        <li><h3><a href={url}>{header}</a></h3>{description}</li>
    )
}

export default PortfolioUnit;