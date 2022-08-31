import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import ModalWrapper from './ModalWrapper';

const Modal = ({ children }: { children: JSX.Element }) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ModalWrapper>{children}</ModalWrapper>,
				document.getElementById('modal') as HTMLElement
			)}
		</Fragment>
	);
};

export { Modal };
