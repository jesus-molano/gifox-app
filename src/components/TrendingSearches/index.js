import React, {Suspense} from 'react';
import useNearScreen from 'hooks/useNearScreen';
import Spinner from 'components/Spinner';

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)


const LazyTrending = () => {
	const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' });

  return <div ref={fromRef}>
    
    {isNearScreen
      ? <Suspense fallback={<Spinner />} >
          <TrendingSearches />
        </Suspense>
      : <Spinner />}
  </div>;
};

export default LazyTrending;
