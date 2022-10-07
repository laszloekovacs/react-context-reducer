import React, {ReactElement} from 'react';
import CounterContext, {useCounterContext} from './CounterContext';
import User from './User';

function App(): ReactElement {
	return (
		<>
			<CounterContext>
				<User></User>
			</CounterContext>
		</>
	);
}

export default App;
