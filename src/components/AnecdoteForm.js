import React from 'react'
import { useDispatch, connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = props => {
	/* 	const dispatch = useDispatch() */

	const create = async e => {
		e.preventDefault()
		const content = e.target.anecdote.value
		e.target.anecdote.value = ''
		props.createAnecdote(content)
		props.setNotification(`a new anecdote: ${content}`, 5)
	}

	return (
		<form onSubmit={create}>
			<h2>create new</h2>
			<div>
				<input name='anecdote' />
			</div>
			<button>create</button>
		</form>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		createAnecdote: content => dispatch(createAnecdote(content)),
		setNotification: (content, time) =>
			dispatch(setNotification(content, time)),
	}
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
