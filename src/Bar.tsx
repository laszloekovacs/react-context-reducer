import React, {ReactElement} from 'react';

function Bar(): ReactElement {
	const cx = 200;
	const cy = 50;

	return (
		<>
			<svg width="400" height="100">
				<circle
					cx={cx}
					cy={cy}
					r="40"
					stroke="green"
					stroke-width="2"
					fill="white"
				></circle>
			</svg>
		</>
	);
}

export default Bar;
