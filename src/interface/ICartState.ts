interface ICartState {
	items: {
		id: string;
		name: string;
		category: string;
		price: number;
		image: string;
	}[];
	cartItems: {
		id: string;
		name: string;
		category: string;
		price: number;
		image: string;
		quantity: number;
		totalPrice: number;
	}[];
	modalIsOpen: boolean;
	addToCart: (id: string) => void;
	removeFromCart: (id: string) => void;
	removeAllFromCart: (id: string) => void;
	toggleModal: (modalState: boolean) => void;
	resetCart: () => void;
}

export default ICartState;
