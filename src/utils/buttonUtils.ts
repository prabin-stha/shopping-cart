import { ButtonStyle, ButtonType } from '../enums';

const getButtonColor = (type: ButtonType) => {
	switch (type) {
		case ButtonType.PRIMARY:
			return '#14b8a6';

		case ButtonType.SECONDARY:
			return '#3b82f6';

		case ButtonType.RED:
			return '#dc2626';
	}
};

const getButtonStyle = (buttonColor: string, style?: ButtonStyle) => {
	if (!style)
		return {
			color: 'white',
		};
	switch (style) {
		case ButtonStyle.BORDER:
			return {
				border: `4px solid ${buttonColor}`,
				background: 'transparent',
				color: buttonColor,
			};

		case ButtonStyle.ICON:
			return {
				color: 'white',
				padding: '12px',
			};

		case ButtonStyle.BORDER_ICON:
			return {
				border: `4px solid ${buttonColor}`,
				background: 'transparent',
				color: buttonColor,
				padding: '12px',
			};
	}
};

export { getButtonColor, getButtonStyle };
