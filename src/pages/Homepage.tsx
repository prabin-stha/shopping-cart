import React, { useContext } from 'react';

import Header from '../components/Header';
import { Modal } from '../components/UI';
import { CartItems, FoodItems } from '../container';
import CartContext from '../store/CartContext';

const Homepage = () => {
	const { modalIsOpen } = useContext(CartContext);

	return (
		<React.Fragment>
			{modalIsOpen && (
				<Modal>
					<CartItems />
				</Modal>
			)}
			<Header />
			<FoodItems />
		</React.Fragment>
	);
};

export default Homepage;
