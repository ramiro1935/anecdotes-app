export const initialState = {
	message: '',
}

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			return {
				message: action.data.message,
			}
		case 'CLEAR_NOTIFICATION': {
			return {
				message: '',
			}
		}
		default:
			return state
	}
}

export const setNotification = (message, time) => {
	return async dispatch => {
		dispatch({
			type: 'SET_NOTIFICATION',
			data: {
				message,
			},
		})
		setTimeout(() => {
			dispatch({
				type: 'CLEAR_NOTIFICATION',
			})
		}, time * 1000)
	}
}

export default notificationReducer
