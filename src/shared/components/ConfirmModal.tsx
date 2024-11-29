import { useEffect, useState } from "react";
import { Button, Image, Modal } from 'antd';

const ConfirmModal = (props: any) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (props.showModal) {
            setOpen(true);
        }
    }, [props.showModal]);

    const handleOk = () => {
        setOpen(false);
        props.handleCancelModal();
    };

    const handleCancel = () => {
        setOpen(false);
        props.handleCancelModal();
    };

    return (
        <div>
            <Modal
                open={open}
                title="Resultados"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" onClick={handleOk} className="confirm-button">
                        Confirmar
                    </Button>,
                ]}
            >
                {props.melanoma ?
                    <div>
                        <p><strong>Grosor: </strong>{props.melanoma.width} mm</p>
                        <p><strong>Ecogenicidad: </strong>{props.melanoma.echogenicity}</p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px 30px'
                            }}
                        >
                            <Image
                                src={props.melanoma.overlay}
                                alt="Melanoma Results"
                                style={{
                                    borderRadius: '10px'
                                }}
                                />
                        </div>
                    </div>
                    : null}
            </Modal>
        </div>
    );
}

export default ConfirmModal;