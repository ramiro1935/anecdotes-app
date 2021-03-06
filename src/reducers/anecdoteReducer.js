import anecdoteService from '../services/anecdotes'
/* const anecdotesAtStart = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const getId = () => (1000000 * Math.random()).toFixed(0)

const asObject = anecdote => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0,
	}
}
 */
/* export const initialState = anecdotesAtStart.map(asObject) */
export const initialState = []

const anecdoteReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_ANECDOTE':
			return [...state, action.data]
		case 'UPDATE_VOTES': {
			return state.map(anecdote =>
				anecdote.id !== action.data.id ? anecdote : action.data
			)
		}
		case 'INIT_ANECDOTES': {
			return action.data
		}

		default:
			return state
	}
}

export const initializeAnecdotes = () => {
	return async dispatch => {
		const response = await anecdoteService.getAll()
		dispatch({
			type: 'INIT_ANECDOTES',
			data: response,
		})
	}
}

export const createAnecdote = content => {
	return async dispatch => {
		const anecdote = await anecdoteService.createNew(content)
		dispatch({
			type: 'CREATE_ANECDOTE',
			data: anecdote,
		})
	}
}

export const updateVotes = id => {
	return async (dispatch, state) => {
		const { anecdotes } = state()
		const anecdote = anecdotes.find(a => a.id === id)
		const anecdoteToUpdate = {
			...anecdote,
			votes: anecdote.votes + 1,
		}
		const response = await anecdoteService.update(anecdoteToUpdate)
		dispatch({
			type: 'UPDATE_VOTES',
			data: response,
		})
	}
}

export default anecdoteReducer
