import { ButtonStyle, ButtonType } from '../enums';

interface IButton {
	type: ButtonType;
	children: JSX.Element | JSX.Element[];
	style?: ButtonStyle;
	clickHandler: () => void;
}

export default IButton;
