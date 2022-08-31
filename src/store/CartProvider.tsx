import React, { useReducer } from 'react';

import { CartActions } from '../enums';
import ICartAction from '../interface/ICartAction';
import ICartState from '../interface/ICartState';
import CartContext from './CartContext';
import { foodData } from './data';

const initialState: ICartState = {
	items: foodData,
	cartItems: [],
	modalIsOpen: false,
	addToCart: id => {},
	removeFromCart: id => {},
	removeAllFromCart: id => {},
	toggleModal: modalState => {},
	resetCart: () => {},
};

const reducer = (state: ICartState, action: ICartAction): ICartState => {
	const {
		type,
		payload: { id, toggleState },
	} = action;

	if (type === CartActions.ADD) {
		const oldCartItems = [...state.cartItems];
		const foodItemExists =
			oldCartItems.filter(el => el.id === id).length > 0;
		if (foodItemExists) {
			const newCartItems = oldCartItems.map(cartItem => {
				if (cartItem.id === id) {
					return {
						...cartItem,
						quantity: cartItem.quantity + 1,
						totalPrice: cartItem.totalPrice + cartItem.price,
					};
				}
				return cartItem;
			});
			return { ...state, cartItems: [...newCartItems] };
		}
		const newCartItems = state.items
			.filter(cartItem => cartItem.id === id)
			.map(cartItem => {
				return {
					...cartItem,
					quantity: 1,
					totalPrice: cartItem.price,
				};
			});

		const cartItems = [...state.cartItems, ...newCartItems];
		return {
			...state,
			cartItems,
		};
	}

	if (type === CartActions.REMOVE) {
		const oldCartItems = [...state.cartItems];
		const foodItemCountOne =
			oldCartItems.filter(el => el.id === id)[0].quantity === 1;
		if (foodItemCountOne) {
			const newCartItems = state.cartItems.filter(
				cartItem => cartItem.id !== id
			);
			return { ...state, cartItems: newCartItems };
		}
		const newCartItems = oldCartItems.map(cartItem => {
			if (cartItem.id === id) {
				return {
					...cartItem,
					quantity: cartItem.quantity - 1,
					totalPrice: cartItem.totalPrice - cartItem.price,
				};
			}
			return cartItem;
		});
		return { ...state, cartItems: [...newCartItems] };
	}

	if (type === CartActions.REMOVE_ALL) {
		const newCartItems = state.cartItems.filter(
			cartItem => cartItem.id !== id
		);
		return { ...state, cartItems: newCartItems };
	}

	if (type === CartActions.TOGGLE_MODAL) {
		if (typeof toggleState !== 'boolean')
			throw new Error(
				'State of toggle is not specified! (Need a boolean value of true or false)'
			);
		return { ...state, modalIsOpen: toggleState };
	}

	if (type === CartActions.RESET) {
		return { ...state, cartItems: [] };
	}

	return state;
};

const CartProvider = ({ children }: { children: JSX.Element }) => {
	const [state, dispatch] = useReducer<
		React.Reducer<ICartState, ICartAction>
	>(reducer, initialState);

	const addToCartHandler = (id: string) => {
		dispatch({ type: CartActions.ADD, payload: { id } });
	};

	const removeFromCartHandler = (id: string) => {
		dispatch({ type: CartActions.REMOVE, payload: { id } });
	};

	const removeAllFromCartHandler = (id: string) => {
		dispatch({ type: CartActions.REMOVE_ALL, payload: { id } });
	};

	const toggleModal = (modalState: boolean) => {
		dispatch({
			type: CartActions.TOGGLE_MODAL,
			payload: { toggleState: modalState },
		});
	};

	const resetCart = () => {
		dispatch({
			type: CartActions.RESET,
			payload: {},
		});
	};

	const providerValue = {
		items: state.items,
		cartItems: state.cartItems,
		addToCart: addToCartHandler,
		removeFromCart: removeFromCartHandler,
		removeAllFromCart: removeAllFromCartHandler,
		modalIsOpen: state.modalIsOpen,
		toggleModal: toggleModal,
		resetCart,
	};
	return (
		<CartContext.Provider value={providerValue}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
