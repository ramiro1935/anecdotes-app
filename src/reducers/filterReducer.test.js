import filterReducer from './filterReducer'

describe('filterReducer', () => {
	test('filter can be changed', () => {
		const action = {
			type: 'SET_FILTER',
			filter: 'primer filtro',
		}
		const filterAtEnd = filterReducer('', action)

		expect(filterAtEnd).toBe('primer filtro')
	})

	test('set empty string', () => {
		const action = {
			type: 'SET_FILTER',
			filter: '',
		}
		const filterAtEnd = filterReducer('', action)
		expect(filterAtEnd).toBe('')
	})
})
