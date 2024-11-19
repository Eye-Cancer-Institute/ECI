import { useState } from 'react'
import { storage } from '../../firebase/config'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { ClipLoader } from "react-spinners";
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import ConfirmModal from './ConfirmModal';
import type { UploadProps } from 'antd';
import ErrorModal from "./ErrorModal";

const { Dragger } = Upload;

const AIHelper = (props: any) => {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [melanoma, setMelanoma] = useState<any>()
  const [showModal, setShowModal] = useState(false)

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const storageRef = ref(storage, `pdfs/${Date.now()}.pdf`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    const body = {
      link: url,
    }
    const link: any = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      const data = await response.json()
      setMelanoma(data)
      props.handleData(data)
      setShowModal(true)
    } catch {
      ErrorModal()
    }
    setLoading(false);
  }

  const upload: UploadProps = {
    onRemove: (file) => {
      setFile(null);
    },
    beforeUpload: (file) => {
      setFile(file);
      return false;
    },
    maxCount: 1,
  };

  const handleCancelModal = () => {
    setShowModal(false)
  }

  return (
    <div className="information bg-tertiary">
      <div style={{ width: '100%' }}>
        <h2 style={{ fontSize: '30px', fontWeight: '800', color: '#f78721', textAlign: 'center', padding: '0 0 15px' }}>Eye Uploader</h2>
        <p>Eye Uploader es un sistema de detección, medición y clasificación de melanoma ocular impulsado por inteligencia artificial. Nuestra aplicación trabaja con el ultrasonido modo B para proporcionar el grosor y la ecogenicidad de la lesión.</p>
        <p>Esta plataforma sigue en desarrollo, por lo que debe ser tomada como un complemento y no como un diagnóstico final.</p>
        <p>A continuación sube tu archivo PDF para saber los resultados del modelo</p>
        <Dragger {...upload} style={{ margin: '10px 0' }}>
          <p className="ant-upload-drag-icon"><InboxOutlined style={{ color: '#f78721' }} /></p>
          <p className="ant-upload-text">Haz clic o arrastra el archivo a esta área para subirlo</p>
        </Dragger>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
          <button className="ai-button" onClick={handleUpload} style={{ alignSelf: 'center' }}>
            Subir archivo
          </button>
          {melanoma ?
            <button className="results-button" onClick={() => setShowModal(true)} style={{ alignSelf: 'center' }}>
              Últimos Resultados
            </button>
            : null
          }
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <ClipLoader
            color={"#f78721"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <div>
          <ConfirmModal melanoma={melanoma} showModal={showModal} handleCancelModal={handleCancelModal} />
        </div>
      </div>
    </div>
  );
};

export default AIHelper;