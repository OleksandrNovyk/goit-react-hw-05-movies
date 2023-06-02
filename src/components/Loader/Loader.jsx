import { ThreeCircles } from 'react-loader-spinner';

import { LoaderOverlay } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <ThreeCircles
        visible={true}
        height="180"
        width="180"
        ariaLabel="three-circles-rotating"
        color={['#6e36c4']}
      />
    </LoaderOverlay>
  );
};
