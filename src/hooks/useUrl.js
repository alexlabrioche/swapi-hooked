import { useLocation, useParams } from 'react-router-dom';

function UseUrl(key) {
  const { pathname } = useLocation();
  const params = useParams();
  const [, locationName] = pathname.split('/');
  const keys = key.split('_');
  const paramsObj = params[key]
    .split('_')
    .reduce((acc, current, i) => ({ ...acc, [keys[i]]: current }), {});

  return [locationName, paramsObj];
}

export default UseUrl;
