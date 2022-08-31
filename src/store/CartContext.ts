import { createContext } from 'react';

import ICartState from '../interface/ICartState';

const CartContext = createContext<ICartState>({
	items: [
		{
			id: '',
			name: '',
			category: '',
			price: 0,
			image: '',
		},
	],
	cartItems: [
		{
			id: '',
			name: '',
			category: '',
			price: 0,
			image: '',
			quantity: 0,
			totalPrice: 0,
		},
	],
	modalIsOpen: true,
	addToCart: id => {},
	removeFromCart: id => {},
	removeAllFromCart: id => {},
	toggleModal: modalState => {},
	resetCart: () => {},
});

export default CartContext;
