import React, {createContext, useContext, useReducer} from 'react';

export type stateType = {
	counter: number;
};

export type actionType = {
	type: string;
	payload?: any;
};

const initialState: stateType = {
	counter: 0,
};

export const context = createContext(initialState);

/*
 *	return state and dispatch
 */
export const useCounterContext = () => {
	const contextstate = useContext(context);
	return useReducer(reducer, contextstate);
};

/*
 *	Context wrapper
 */
export default function CounterContext(props: {
	children?: React.ReactNode | null;
}) {
	return (
		<>
			<context.Provider value={initialState}>
				{props.children}
			</context.Provider>
		</>
	);
}

function reducer(state: stateType, action: actionType): stateType {
	switch (action.type) {
		case 'inc':
			return {counter: state.counter + 1};

		case 'dec':
			return {counter: state.counter - 1};

		default:
			return state;
	}
}
