import React from 'react';
import CounterContext, {useCounterContext} from './CounterContext';

import type stateType from './CounterContext';

const App: React.FC = () => {
	const [state, dispatch] = useCounterContext();

	return <>{state.counter}</>;
};

export default App;
