import './ArrowIcon.css';

import React from 'react';

const ArrowIcon = ({
	direction = 'right',
	height = '24',
	width = '24',
  color = '#fff',
  goInit= false,
} = {}) => {
	return (
		<svg
			className={`${direction} ${goInit ? 'goInit' : ''} arrowIcon`}
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
