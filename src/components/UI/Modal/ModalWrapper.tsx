import { useContext } from 'react';

import CartContext from '../../../store/CartContext';

const ModalWrapper = ({ children }: { children: JSX.Element }) => {
	const cartCtx = useContext(CartContext);
	const { toggleModal } = cartCtx;

	const onClickHandler = (toggleState: boolean) => {
		toggleModal(toggleState);
	};

	return (
		<div className='fixed top-0 left-0 right-0 bottom-0 bg-teal-500 z-20'>
			<div className='relative container bg-white h-full mx-auto rounded-md shadow-sm mt-8'>
				<button
					onClick={() => {
						onClickHandler(false);
					}}
				>
					<i className='absolute right-8 top-5 fa-solid fa-xmark text-4xl text-teal-500 hover:scale-105 hover:text-red-500 transition-all'></i>
				</button>
				<div className='overflow-y-scroll mt-16 h-full'>{children}</div>
			</div>
		</div>
	);
};

export default ModalWrapper;
