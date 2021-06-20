import notificationReducer from './notificationReducer'

describe('notificationReducer', () => {
	let initialState = {}
	beforeEach(() => {
		initialState = {
			message: '',
			style: 'success',
		}
	})
	test('filter can be changed', () => {
		const action = {
			type: 'SET_NOTIFICATION',
			data: {
				message: 'this is a message error',
				style: 'error',
			},
		}

		const notificationAtEnd = notificationReducer(initialState, action)
		expect(notificationAtEnd).toEqual({
			message: 'this is a message error',
			style: 'error',
		})
	})

	test('set empty string', () => {
		const action = {
			type: 'SET_NOTIFICATION',
			data: {
				message: 'this is a message success',
				style: 'success',
			},
		}
		const notificationAtEnd = notificationReducer(initialState, action)
		expect(notificationAtEnd).toEqual({
			message: 'this is a message success',
			style: 'success',
		})
	})
})
