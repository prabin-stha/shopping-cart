import { CartActions } from '../enums';

interface ICartAction {
	type: CartActions;
	payload: {
		id?: string;
		toggleState?: boolean;
	};
}

export default ICartAction;
