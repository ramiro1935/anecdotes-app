import React from 'react'
import { useDispatch } from 'react-redux'
import anecdoteService from '../services/anecdotes'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
	const dispatch = useDispatch()

	const create = async e => {
		e.preventDefault()
		const content = e.target.anecdote.value
		e.target.anecdote.value = ''
		dispatch(createAnecdote(content))
		dispatch(setNotification({ message: `a new anecdote: ${content}` }))
		setTimeout(() => {
			dispatch(setNotification({ message: '' }))
		}, 5000)
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

export default AnecdoteForm
