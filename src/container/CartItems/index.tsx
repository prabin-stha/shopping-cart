import { useContext } from 'react';

import { Button } from '../../components/UI';
import { ButtonType } from '../../enums';
import CartContext from '../../store/CartContext';
import { totalCartPrice } from '../../utils';
import CartItem from './CartItem';

const CartItems = () => {
	const { cartItems, resetCart } = useContext(CartContext);

	const totalPrice = totalCartPrice(cartItems);

	const cartHasItems = cartItems.length > 0;

	const onClickOrderHandler = () => {
		resetCart();
	};

	const markup = cartItems.map(cartItem => (
		<CartItem
			key={cartItem.id}
			id={cartItem.id}
			name={cartItem.name}
			category={cartItem.category}
			image={cartItem.image}
			quantity={cartItem.quantity}
			price={cartItem.price}
			totalPrice={cartItem.totalPrice}
		/>
	));

	return (
		<div className='container px-5 mx-auto'>
			<section className=' text-gray-600 body-font pb-32'>
				<h3 className='container px-5 mx-auto text-5xl font-bold text-zinc-800 lg:ml-16'>
					Cart Items
				</h3>
				<div className='container px-5 py-10 mx-auto'>
					<div className='flex flex-wrap -m- gap-3 lg:gap-7 lg:ml-16'>
						{markup}
					</div>
				</div>
				{cartHasItems && (
					<div className='container px-5 mx-auto text-zinc-800 lg:ml-16'>
						<div className='flex items-center gap-4'>
							<span className='text-2xl font-semibold'>
								Total Price
							</span>
							<span className='text-2xl font-bold'>
								रू {totalPrice}
							</span>
						</div>
						<div className='pt-3' title='Order Now'>
							<Button
								type={ButtonType.PRIMARY}
								clickHandler={onClickOrderHandler}
							>
								<span>Order Now</span>
							</Button>
						</div>
					</div>
				)}
			</section>
		</div>
	);
};

export { CartItems };
