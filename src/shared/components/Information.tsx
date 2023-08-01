const Information = () => {
  return (
    <div className="information">
      <div className="main-title-div">
        <span>Mmy App</span>
      </div>

      <p className="descripcion">
        <span>Mmy App</span> es una{" "}
        <span>
          aplicación enfocada en orientar al oftalmólogo actual en la detección
          temprana de melanoma coroideo
        </span>
        . Esta permite evaluar lesiones pigmentadas del fondo del ojo rápida y
        convenientemente. Tiene la finalidad de detectar lesiones en riesgo de
        transformación maligna para su <span>referencia temprana</span>.
      </p>
      <p className="disclaimer">
        Importante: Esta aplicación fue diseñada para utilizarse{" "}
        <span>
          exclusivamente como una guía o apoyo para consultas oftalmológicas
        </span>{" "}
        (el resultado generado no es un diagnóstico final). Se recomienda
        utilizarla como auxiliar en el proceso de revisión y observación
        oftálmica del paciente.
      </p>
      <div className="instrucciones">
        <p>
          ¿Cómo usar la calculadora? Previo al uso de la aplicación, deberá
          evaluarse al paciente y{" "}
          <span>solicitarle los estudios necesarios</span>, que incluyen:
        </p>
        <div className="bullets-div">
          <ul>
            <li>Fotografía de fondo de ojo.</li>
            <li>Autofluorescencia.</li>
            <li>OCT macular y sobre la lesión.</li>
            <li>Ultrasonido modo B.</li>
          </ul>
          <img src="/images/list.png" alt="Lista" />
        </div>
      </div>
      <p className="mt-5">
        Una vez se tengan los resultados de los estudios del paciente, puede
        seguir con la valoración basándose en las características que aparecen a
        continuación.{" "}
        <span>
          Asegúrese de observar y responder “sí” o “no” para cada una de las 6
          características
        </span>
        .
      </p>
    </div>
  );
};

export default Information;
