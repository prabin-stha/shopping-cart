import { useContext } from 'react';

import { Button } from '../../../components/UI';
import { ButtonStyle, ButtonType } from '../../../enums';
import ICartItem from '../../../interface/ICartItem';
import CartContext from '../../../store/CartContext';

const CartItem = ({
	id,
	name,
	category,
	price,
	image,
	quantity,
	totalPrice,
}: ICartItem) => {
	const { addToCart, removeFromCart, removeAllFromCart } =
		useContext(CartContext);

	const onAddClick = () => {
		addToCart(id);
	};

	const onRemoveClick = () => {
		removeFromCart(id);
	};

	return (
		<div className='lg:w-5/12 md:w-1/1 p-4 w-full bg-slate-200'>
			<div className='block relative h-48 rounded overflow-hidden'>
				<img
					alt='ecommerce'
					className='object-cover object-center w-full h-full block hover:scale-110 transition-all'
					src={image}
				/>
			</div>
			<div className='mt-4'>
				<h3 className='text-gray-500 text-xs tracking-widest title-font mb-1 font-bold'>
					{name}
				</h3>
				<h2 className='text-gray-900 title-font text-lg font-medium'>
					{category}
				</h2>
				<p className='mt-1'>
					<span className='text-lg'>रू</span> {price}
				</p>
			</div>
			<div className='mt-3'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<div className='flex gap-2'>
							<div title='Increase'>
								<Button
									type={ButtonType.SECONDARY}
									style={ButtonStyle.ICON}
									clickHandler={onAddClick}
								>
									<i className='fa-solid fa-plus'></i>
								</Button>
							</div>
							<div title='Decrease'>
								<Button
									type={ButtonType.RED}
									style={ButtonStyle.ICON}
									clickHandler={onRemoveClick}
								>
									<i className='fa-solid fa-minus'></i>
								</Button>
							</div>
						</div>
						<div className='flex items-center'>
							<div className='flex justify-center items-center text-zinc-700 text-lg font-semibold gap-1'>
								<span>{quantity}</span>
								<i className='fa-solid fa-x flex justify-center items-center text-xs'></i>
							</div>
						</div>
					</div>
					<div className='flex items-center gap-5'>
						<div className='text-3xl'>
							<span className='text-4xl'>रू </span>
							<span>{totalPrice}</span>
						</div>

						<div title='Remove All'>
							<Button
								clickHandler={() => {
									removeAllFromCart(id);
								}}
								type={ButtonType.RED}
								style={ButtonStyle.BORDER_ICON}
							>
								<i className='fa-solid fa-trash-can'></i>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
