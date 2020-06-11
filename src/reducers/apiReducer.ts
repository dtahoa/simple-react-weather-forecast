let actionHandlers = {} as any;
interface ApiTypes {
  url: string;
  method: string;
  timeout?: number;
  result?: any;
  error?: any;
}
actionHandlers['FETCH_URL_START'] = (state: any, { url, method, timeout }: ApiTypes) => {
  state[`${url}:${method}`].requesting = true;
  state[`${url}:${method}`].timeout = timeout;
  delete state[`${url}:${method}`].error;
  return state;
}

actionHandlers['FETCH_URL_SUCCESS'] = (state: any, { url, method, result }: ApiTypes) => {
  const data = Array.isArray(result) ? result : result;
  state[`${url}:${method}`].requesting = false;
  state[`${url}:${method}`].data = data;
  return state;
}

actionHandlers['FETCH_URL_FAILED'] = (state: any, { url, method, error }: ApiTypes) => {
  state[`${url}:${method}`].requesting = false;
  state[`${url}:${method}`].error = error;
  delete state[`${url}:${method}`].data;
  return state;
}

export default (state = {}, action: { type: string | number; }) => {
  const nextState = (actionHandlers[action.type] ? actionHandlers[action.type] : undefined);
  return nextState !== null && nextState !== undefined ? nextState : state;
}