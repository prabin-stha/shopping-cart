import CartItemsType from '../type/CartItemsType';
const itemExists = (cartItems: CartItemsType, id: string) => {
	return cartItems.filter(cartElement => cartElement.id === id).length > 0;
};

export { itemExists };
