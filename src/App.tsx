import React, {ReactElement} from 'react';
import CounterContext, {useCounterContext} from './CounterContext';
import User from './User';
import Bar from './Bar';

function App(): ReactElement {
	return (
		<>
			<CounterContext>
				<Bar></Bar>
				<User></User>
			</CounterContext>
		</>
	);
}

export default App;
