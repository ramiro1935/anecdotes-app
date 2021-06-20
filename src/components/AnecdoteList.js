import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateVotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
	const filter = useSelector(state => state.filter)
	const anecdotes = useSelector(state =>
		state.anecdotes.filter(anecdote => {
			return anecdote.content.toLowerCase().includes(filter)
		})
	)

	const dispatch = useDispatch()
	const vote = id => {
		const anecdote = anecdotes.find(anecdote => anecdote.id === id)
		dispatch(updateVotes(id))
		dispatch(setNotification({ message: `you voted '${anecdote.content}'` }))
		setTimeout(() => {
			dispatch(setNotification({ message: '' }))
		}, 5000)
	}

	const anecdotesSorted = anecdotes
		.sort((a, b) => b.votes - a.votes)
		.map(a => a)
	return (
		<div>
			{anecdotesSorted.map(anecdote => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default AnecdoteList
