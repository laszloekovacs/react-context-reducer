import React, { ReactElement, useEffect, useRef } from 'react';
import { particles_init, particles_render, particles_update } from './rainFx';

function Bar(): ReactElement {
	const canvasRef: React.MutableRefObject<HTMLCanvasElement | null> = useRef(null);
	const frame = useRef(0);
	const animHandleRef = useRef(0);

	useEffect(() => {
		function render() {
			const canvas: HTMLCanvasElement | null = canvasRef.current;
			if (canvas != null) {

				const ctx = canvas?.getContext('2d');
				// drawing starts

				if (ctx != null) {
					ctx.font = '12px Arial';

					ctx.fillStyle = 'blue';
					ctx.fillRect(0, 0, 400, 300);
					ctx.fillStyle = 'white';
					ctx.fillText(frame.current.toString(), 5, 15);

					particles_update(frame.current);
					particles_render(ctx);
				}
				// drawing ends
				animHandleRef.current = window.requestAnimationFrame(render);
				frame.current++;
			}
		}

		particles_init(12);

		render();

		return () => {
			window.cancelAnimationFrame(animHandleRef.current);
		};
	}, []);

	return (
		<>
			<canvas ref={canvasRef} width="400" height="300"></canvas>
		</>
	);
}

export default Bar;
