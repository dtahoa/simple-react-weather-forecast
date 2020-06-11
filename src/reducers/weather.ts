const weather = {
  'FETCH_CURRENT_WEATHER_START': (state: any, action: { payload: any; }) => ({ ...state, weather: { isLoading: true } }),
  'FETCH_CURRENT_WEATHER_FAILED': (state: any, action: { payload: any; error: any }) => ({ ...state, weather: { isLoading: false, error: action.error } }),
  'FETCH_CURRENT_WEATHER_COMPLETED': (state: any, action: { payload: any; }) => ({ ...state, weather: { data: action.payload, isLoading: false } })
}

export default weather;