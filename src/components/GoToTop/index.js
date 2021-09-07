import ArrowIcon from 'components/ArrowIcon';
import useNearScreen from 'hooks/useNearScreen';
import { useEffect, useState, useRef} from 'react';

const GoToTop = () => {
	const ref = useRef();
	const [isHidden, setIsHidden] = useState('hidden')

	const { isNearScreen } = useNearScreen({
		distance: '5px',
		externalRef: ref,
		once:false,
	});

	useEffect(() => {
		isNearScreen ? setIsHidden('hidden') : setIsHidden('show');
	}, [isNearScreen]);

	return (
		<>
			<a id="goToTop" ref={ref} href='#goToTop' >
				<ArrowIcon
					show={isHidden}
					direction='up'
					color='#D3FF13'
					width='60'
					height='60'
					goToTop='true'
				/>
			</a>
		</>
	);
};

export default GoToTop;
