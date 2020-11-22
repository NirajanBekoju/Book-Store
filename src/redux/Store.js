import { createStore } from 'redux'

import alertReducer from './alert/AlertReducers'

const store = createStore(alertReducer)

export default store