import { useContext } from 'react';

import { ButtonType } from '../enums';
import CartContext from '../store/CartContext';
import { countNumberOfItems, totalCartPrice } from '../utils';
import { Button } from './UI';

const Header = () => {
	const { toggleModal, cartItems } = useContext(CartContext);

	const numberOfFoodItems = countNumberOfItems(cartItems);

	const totalPrice = totalCartPrice(cartItems);

	const onClickHandler = (toggleState: boolean) => {
		toggleModal(toggleState);
	};
	return (
		<header className='text-gray-600 body-font sticky top-0 bg-white shadow-sm z-10'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<nav className='flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto'>
					<span className='mr-5 hover:text-gray-900 cursor-pointer'>
						Home
					</span>
					<span className='mr-5 hover:text-gray-900 cursor-pointer'>
						About
					</span>
					<span className='mr-5 hover:text-gray-900 cursor-pointer'>
						Contact
					</span>
					<span className='hover:text-gray-900 cursor-pointer'>
						Account
					</span>
				</nav>
				<span className='flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0'>
					<span
						className='ml-3 text-3xl'
						style={{ fontFamily: 'Georgia' }}
					>
						Foodi
					</span>
				</span>
				<div className='lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 justify-center items-center gap-2'>
					<div className='border-teal-500 border-solid border-4 h-11 px-3 py-1 rounded-md text-teal-500 flex justify-center items-center font-medium text-lg'>
						<span className='font-semibold text-base'>रू</span>
						&nbsp;
						{totalPrice}
					</div>
					<div className='border-teal-500 border-solid border-4 h-11 px-3 py-1 rounded-md text-teal-500 flex justify-center items-center font-medium text-lg'>
						{numberOfFoodItems}&nbsp;
						<i className='fa-solid fa-x flex justify-center items-center text-xs'></i>
					</div>
					<Button
						type={ButtonType.PRIMARY}
						clickHandler={() => {
							onClickHandler(true);
						}}
					>
						<i className='fa-solid fa-cart-shopping'></i>
						<span>Cart</span>
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
