import React from 'react';
import { useCounterContext } from './CounterContext';



function User(): JSX.Element {
	const [state, dispatch] = useCounterContext();

	function increase(): void {
		dispatch({ type: 'inc' });
	}

	function decrease(): void {
		dispatch({ type: 'dec' });
	}

	return (
		<>
			<p>{state.counter}</p>

			<input
				type="button"
				value="increase"
				onClick={() => increase()}
			></input>

			<input
				type="button"
				value="decrease"
				onClick={() => decrease()}
			></input>
		</>
	);
}

export default User;
