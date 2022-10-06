import React, {createContext, useContext} from 'react';

export type stateType = {
	counter: number;
};

const initialState: stateType = {
	counter: 0,
};

export const context = createContext(initialState);

export const useCounterContext: () => [stateType, string] = () => {
	const state = useContext(context);

	return [state, 'dispatch'];
};

export default function CounterContext({
	children,
}: {
	children: React.ReactNode;
}): React.ReactNode {
	return (
		<>
			<context.Provider value={initialState}>{children}</context.Provider>
		</>
	);
}
