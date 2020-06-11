import weather from './weather';
import forecast from './forecast';

export const initialState = {
  forecast: {
    isLoading: false,
    data: [],
    error: null,
  },
  weather: {
    isLoading: false,
    data: {},
    error: null,
  }
};

const reducer = (state: any, action: { type: string | number; }) => {
  const combineReducers: { [index: string]: any } = { ...weather, ...forecast }
  let newState = null;
  if (combineReducers[action.type]) {
    newState = combineReducers[action.type](state, action);
  }
  return newState ? newState : state;
}

export default reducer;
