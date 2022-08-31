import CartItemsType from '../type/CartItemsType';

const countNumberOfItems = (cartItems: CartItemsType) => {
	const listOfFoodCount = cartItems.map(cartItem => cartItem.quantity);
	if (listOfFoodCount.length > 0)
		return listOfFoodCount.reduce((acc, cur) => acc + cur);
	return 0;
};

export { countNumberOfItems };
