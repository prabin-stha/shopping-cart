import CartItemsType from '../type/CartItemsType';

const totalCartPrice = (cartItems: CartItemsType) => {
	const cartItemPriceList = cartItems.map(cartItem => cartItem.totalPrice);
	if (cartItemPriceList.length > 0)
		return cartItemPriceList.reduce((acc, cur) => acc + cur);
	return 0;
};

export { totalCartPrice };
