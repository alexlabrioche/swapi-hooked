// Actions Types
export const FETCHING = `FETCHING`;
export const SUCCESS = `SUCCESS`;
export const ERROR = `ERROR`;

// Actions Creators
export const fetching = () => ({ type: FETCHING });
export const success = (response) => ({ type: SUCCESS, response });
export const error = (response) => ({ type: ERROR, response });
