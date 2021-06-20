export const initialState = {
	message: '',
	style: 'success',
}

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			return {
				message: action.data.message,
				style: action.data.style,
			}

		default:
			return state
	}
}

export const setNotification = ({ message, style = 'success' }) => {
	return {
		type: 'SET_NOTIFICATION',
		data: {
			message,
			style,
		},
	}
}

export default notificationReducer
