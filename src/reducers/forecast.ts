const forecast = {
  'FETCH_CURRENT_FORECAST_START': (state: any, action: { payload: any; }) => ({ ...state, forecast: { isLoading: true } }),
  'FETCH_CURRENT_FORECAST_FAILED': (state: any, action: { payload: any; error: any }) => ({ ...state, forecast: { isLoading: false, error: action.error } }),
  'FETCH_CURRENT_FORECAST_COMPLETED': (state: any, action: { payload: any; }) => ({ ...state, forecast: { data: action.payload || [], isLoading: false } })
}

export default forecast;