import { useContext } from 'react';

import CartContext from '../../store/CartContext';
import FoodCard from './FoodItem';

const FoodItems = () => {
	const cartCTX = useContext(CartContext);

	const items = cartCTX.items;
	const markup = items.map((foodItem, index) => (
		<FoodCard
			key={index}
			id={foodItem.id}
			name={foodItem.name}
			category={foodItem.category}
			price={foodItem.price}
			image={foodItem.image}
		/>
	));

	return (
		<section className='py-12 bg-slate-200'>
			<h1 className='container px-5 mx-auto text-5xl font-bold text-zinc-800'>
				Food Items
			</h1>
			<div className='container px-5 mx-auto'>
				<section className='text-gray-600 body-font'>
					<div className='container py-10 mx-auto'>
						<div className='flex flex-wrap -m- gap-5'>{markup}</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export { FoodItems };
