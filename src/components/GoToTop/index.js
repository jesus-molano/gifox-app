import ArrowIcon from 'components/ArrowIcon';
import useNearScreen from 'hooks/useNearScreen';
import { useEffect, useRef, useState } from 'react';

const GoToTop = () => {
	const ref = useRef();
	const [isActive, setIsActive] = useState(false);

	const { isNearScreen } = useNearScreen({
		distance: '5px',
		externalRef: ref,
	});

	useEffect(() => {
		isNearScreen && setIsActive((prevState) => !prevState);
	}, [isNearScreen]);

	return (
		<>
			<a href='#header-logo' className={isActive ? 'show' : 'hidden'}>
				<ArrowIcon
					direction='up'
					color='#D3FF13'
					width='60'
					height='60'
					goInit='true'
				/>
			</a>
			<div className='Arrow-visor' ref={ref}></div>
		</>
	);
};

export default GoToTop;
