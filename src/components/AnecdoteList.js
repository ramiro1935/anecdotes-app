import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { updateVotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = props => {
	/* const filter = useSelector(state => state.filter)
	const anecdotes = useSelector(state =>
		state.anecdotes.filter(anecdote => {
			return anecdote.content.toLowerCase().includes(filter)
		})
	);
	const dispatch = useDispatch()
	*/

	const vote = id => {
		const anecdote = props.anecdotes.find(anecdote => anecdote.id === id)
		props.updateVotes(id)
		props.setNotification(`you voted '${anecdote.content}'`, 5)
	}

	const anecdotesSorted = props.anecdotes
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
const mapStateToProps = state => {
	return {
		anecdotes: state.anecdotes.filter(anecdote => {
			return anecdote.content.toLowerCase().includes(state.filter)
		}),
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateVotes: id => dispatch(updateVotes(id)),
		setNotification: (content, time) =>
			dispatch(setNotification(content, time)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
