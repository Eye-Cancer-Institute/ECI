import React from "react";

const Information = () => {
  return (
    <div className="information">
      <div className="main-title-div">
        <h1>
          Mmy <span>App</span>
        </h1>
      </div>

      <p className="descripcion">
        <span>Descripción Técnica:</span> Mmy App es una aplicación enfocada en
        orientar al oftalmólogo actual. Esta permite evaluar lesiones
        pigmentadas del fondo del ojo rápida y convenientemente. Tiene la
        finalidad de detectar lesiones en riesgo de transformación maligna para
        su referencia temprana.
      </p>
      <p className="disclaimer">
        Disclaimer: Esta aplicación fue diseñada para utilizarse exclusivamente
        como una guía o apoyo para consultas oftalmológicas (el resultado
        generado no es un diagnóstico final). Se recomienda utilizarla como
        auxiliar en el proceso de revisión y observación ofotálmica del
        paciente.
      </p>
      <div className="instrucciones">
        <p>
          <span>Instrucciones para el uso:</span> ¿Cómo usar la calculadora?
          Previo al uso de la aplicación, deberá evaluarse al paciente y
          solicitarle los estudios necesarios, que incluyen:
        </p>
        <ul>
          <li>Fotografía de fondo de ojo</li>
          <li>Autofluorescencia</li>
          <li>OCT macular y sobre la lesión</li>
          <li>Ultrasonido modo B</li>
        </ul>
      </div>
      <p className="mt-5">
        Una vez se tengan los resultados de los estudios del paciente, puede
        seguir con la valoración basándose en las características que aparecen a
        continuación. Asegúrese de observar y responder “sí” o “no” para cada
        una de las 6 características.
      </p>
    </div>
  );
};

export default Information;
