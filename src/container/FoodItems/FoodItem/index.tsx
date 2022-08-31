import { useContext } from 'react';
import { Button } from '../../../components/UI';
import { ButtonType } from '../../../enums';
import IFoodItem from '../../../interface/IFoodItem';
import CartContext from '../../../store/CartContext';
import { itemExists } from '../../../utils/foodItemUtils';

const FoodItem = ({ name, category, price, image, id }: IFoodItem) => {
	const { addToCart, removeAllFromCart, cartItems } = useContext(CartContext);

	const cartHasItem = itemExists(cartItems, id);

	const onAddClickHandler = (id: string) => {
		addToCart(id);
	};

	const onRemoveClickHandler = (id: string) => {
		removeAllFromCart(id);
	};

	return (
		<div className='lg:w-1/4 md:w-1/1 p-4 w-full bg-white'>
			<div className='block relative h-48 rounded overflow-hidden'>
				<img
					alt='ecommerce'
					className='object-cover object-center w-full h-full block hover:scale-110 transition-all'
					src={image}
				/>
			</div>
			<div className='mt-4'>
				<h3 className='text-gray-500 text-xs tracking-widest title-font mb-1 font-bold'>
					{category}
				</h3>
				<h2 className='text-gray-900 title-font text-lg font-medium'>
					{name}
				</h2>
				<p className='mt-1'>
					<span className='text-lg'>रू</span> {price}
				</p>
			</div>
			<div className='mt-3 flex justify-end'>
				{!cartHasItem ? (
					<Button
						clickHandler={() => {
							onAddClickHandler(id);
						}}
						type={ButtonType.SECONDARY}
					>
						<i className='fa-solid fa-plus pr-2'></i>
						<span>Add to Cart</span>
					</Button>
				) : (
					<Button
						clickHandler={() => {
							onRemoveClickHandler(id);
						}}
						type={ButtonType.RED}
					>
						<i className='fa-solid fa-minus pr-2'></i>
						<span>Remove All</span>
					</Button>
				)}
			</div>
		</div>
	);
};

export default FoodItem;
