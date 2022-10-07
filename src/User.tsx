import React from 'react';
import {useCounterContext} from './CounterContext';

function User() {
	const [state, dispatch] = useCounterContext();

	function handleIncrease() {
		dispatch({type: 'inc'});
	}

	return (
		<>
			<p>{state.counter}</p>

			<input
				type="button"
				value="increase"
				onClick={() => handleIncrease()}
			></input>
		</>
	);
}

export default User;
