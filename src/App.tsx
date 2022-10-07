import React from 'react';
import CounterContext, {useCounterContext} from './CounterContext';
import User from './User';

const App: React.FC = () => {
	const [state, dispatch] = useCounterContext();

	return (
		<>
			<CounterContext>
				<User></User>
			</CounterContext>
		</>
	);
};

export default App;
