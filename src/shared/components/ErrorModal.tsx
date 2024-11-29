import { Modal } from 'antd';

const ErrorModal = () => {
    Modal.error({
        title: 'Error',
        content: 'Ha ocurrido un error con el sistema, por favor intenta de nuevo más tarde.',
        okButtonProps: { style: { backgroundColor: '#f78721', color: 'white' } }
    });
}

export default ErrorModal;