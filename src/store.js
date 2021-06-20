import { createStore, combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const reducers = combineReducers({
	anecdotes: anecdoteReducer,
	filter: filterReducer,
	notification: notificationReducer,
})

const store = createStore(reducers, composeWithDevTools())

export default store
