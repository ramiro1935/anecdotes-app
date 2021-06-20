export const initialState = {
	message: '',
}

var idNotification = 0

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			return {
				message: action.data.message,
				id: action.data.id,
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
		if (idNotification > 0) clearTimeout(idNotification)
		dispatch({
			type: 'SET_NOTIFICATION',
			data: {
				message,
				id: 0,
			},
		})
		idNotification = setTimeout(() => {
			dispatch({
				type: 'CLEAR_NOTIFICATION',
				data: {
					message: '',
				},
			})
		}, time * 1000)
	}
}

export default notificationReducer
