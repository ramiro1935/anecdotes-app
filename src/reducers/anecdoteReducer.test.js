import deepFreeze from 'deep-freeze'
import anecdoteReducer from './anecdoteReducer'

describe('anecdoteReducer', () => {
	const anecdotesAtStart = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
	]

	const getId = () => (100000 * Math.random()).toFixed(0)

	const asObject = anecdote => {
		return {
			content: anecdote,
			id: getId(),
			votes: 0,
		}
	}

	const initialState = anecdotesAtStart.map(asObject)

	test('the amount of votes must be saved successfuly', () => {
		const id = initialState[0].id
		const action = {
			type: 'UPDATE_VOTES',
			data: {
				id,
			},
		}
		const anecdoteToChange = {
			...initialState[0],
			votes: initialState[0].votes + 1,
		}
		const anecdotesAtEnd = initialState.map(anecdote =>
			anecdote.id !== id ? anecdote : anecdoteToChange
		)
		const newState = anecdoteReducer(initialState, action)

		expect(newState).toEqual(anecdotesAtEnd)
	})

	test('new anecdotes successfully', () => {
		const newAnecdote = {
			content: 'new anecdote',
			id: getId(),
			votes: 0,
		}
		const action = {
			type: 'CREATE_ANECDOTE',
			data: newAnecdote,
		}
		const anecdotesAtEnd = [...initialState, newAnecdote]
		const newAnecdotes = anecdoteReducer(initialState, action)
		expect(newAnecdotes).toEqual(anecdotesAtEnd)
	})
})
