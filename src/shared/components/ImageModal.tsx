import { useEffect, useState } from "react";
import { Modal } from 'antd';

const ImageModal = (props: any) => {
    const [open, setOpen] = useState(false);


    useEffect(() => {
        if (props.showModal) {
            setOpen(true);
        }
    }, [props.showModal]);

    const handleCancel = () => {
        setOpen(false);
        props.handleCancelModal();
    };

    const onClickImage = (image: any) => {
        handleCancel();
        props.getMelanoma(image);
    };

    return (
        <Modal
            open={open}
            title="Elegir imagen a procesar"
            onCancel={handleCancel}
            footer={null}
        >
            {props.images && props.images.length > 0 ? (
                props.images.map((image: any, index: number) => (
                    <div key={index} onClick={() => onClickImage(image)} style={{ cursor: 'pointer' }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px 30px',
                                width: '100%',
                            }}
                        >
                            <p style={{ width: "10%", fontSize: 20 }}>
                                <strong>{index + 1}</strong>
                            </p>
                            <img
                                src={image}
                                alt="Melanoma Results"
                                style={{
                                    borderRadius: '10px',
                                    width: '70%',
                                }}
                            />
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay imágenes para mostrar</p>
            )}
        </Modal>
    );
};

export default ImageModal;
