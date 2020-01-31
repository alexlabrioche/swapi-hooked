import { useReducer, useCallback } from 'react';
import axios from 'axios';
import reducer, { initialState } from './reducer';
import { fetching, success, error } from './actions';

const useApiRequest = ({ verb = 'get', options = {} } = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeRequest = useCallback(
    async (url) => {
      dispatch(fetching());
      try {
        const response = await axios[verb](url, options);
        dispatch(success(response));
      } catch (err) {
        dispatch(error(err));
      }
    },
    [verb, options],
  );
  return [state, makeRequest];
};

export default useApiRequest;
