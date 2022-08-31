import { useContext } from 'react';

import Homepage from './pages/Homepage';
import CartContext from './store/CartContext';

function App() {
	const cartCtx = useContext(CartContext);

	const { modalIsOpen } = cartCtx;
	if (modalIsOpen) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'scroll';
	}

	return (
		<div className='App'>
			<Homepage />
		</div>
	);
}

export default App;
