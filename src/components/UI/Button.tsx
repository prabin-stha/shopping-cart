import IButton from '../../interface/IButton';

import { getButtonColor, getButtonStyle } from '../../utils/buttonUtils';

const Button = ({ type, style, children, clickHandler }: IButton) => {
	const buttonColor = getButtonColor(type);
	const buttonStyle = getButtonStyle(buttonColor, style);

	return (
		<button
			className={`px-8 py-3 rounded-lg flex justify-center items-center gap-x-1 font-semibold tracking-wide hover:scale-105 transition-transform duration-200 mt-4 md:mt-0`}
			style={{ background: buttonColor, ...buttonStyle }}
			onClick={clickHandler}
		>
			{children}
		</button>
	);
};

export { Button };
