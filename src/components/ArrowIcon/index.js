import './ArrowIcon.css';

import React from 'react';

const ArrowIcon = ({
	show = 'show',
	direction = 'right',
	height = '24',
	width = '24',
  color = '#fff',
  goToTop= false,
} = {}) => {
	return (
		<svg
			className={`${direction} ${show} ${goToTop ? 'go-to-top' : ''} arrowIcon`}
			fill={`${color}`}
			width={`${width}`}
			height={`${height}`}
			viewBox='0 0 24 24'
		>
			<path d='M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z' />
		</svg>
		
	);
};

export default ArrowIcon;
