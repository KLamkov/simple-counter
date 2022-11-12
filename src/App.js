import React from 'react';
import { useState } from 'react';
import './index.scss';

function App() {
	const [count, setCount] = useState(0);

	const onClickPlus = () => {
		setCount(count + 1)
	}

	const onClickRandom = () => {
		setCount(Math.floor(Math.random() * 100))
	}

	const onClickMinus = () => {
		setCount(count - 1)
	}

	return (
		<div className="App">
		<div>
			<h2>Counter:</h2>
			<h1>{count}</h1>
			<button onClick={onClickMinus} className="minus">
				- Minus
			</button>
			<button onClick={onClickRandom} className="random">
				Random 
			</button>
			<button onClick={onClickPlus} className="plus">
				Plus +
			</button>
		</div>
		</div>
	);
}

export default App;
